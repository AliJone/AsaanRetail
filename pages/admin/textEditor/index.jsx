import 'react-quill/dist/quill.snow.css';

import NavigationBar from '../../../components/Navbar';
import { Parser } from 'htmlparser2';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });


    const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
           
          ['bold', 'italic', 'underline', 'strike'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }
      /*
       * Quill editor formats
       * See https://quilljs.com/docs/formats/
       */
      const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
      ]
      
// export default function Home() {
// return <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
// }


export default function Home() {
    const [editorHtml, setEditorHtml] = useState('');
  
    const handleEditorChange = (content, delta, source, editor) => {
      setEditorHtml(editor.getHTML()); // Or use content for raw HTML
    };
  
    const handleSubmit = () => {
      // Handle the submission of the editor's content
      console.log("html is :",editorHtml)
      console.log('Submitted content:', parseHtmlToModel(editorHtml));
    };

    const parseHtmlToModel = (htmlInput) => {
        let currentTOCId = 1;
        let tempModel = { tableOfContents: [], content: [], titleData:{tag:'',title:'',author:'',date: ''},titleImage:'' };
        let lastOpenedTag = '';
        let isTitleData = false;
      
        const parser = new Parser({
          onopentag(name, attribs) {
            lastOpenedTag = name;
            if (name === "h1") {
              const tocId = `toc${currentTOCId}`;
              tempModel.tableOfContents.push({ id: tocId, title: '' });
            }
            else if (name === "img" && attribs.src.startsWith('data:image')) {
                tempModel.content.push({
                  id: `toc${currentTOCId}`,
                  type: 'image',
                  src: attribs.src,
                });
                currentTOCId++;
              }
              else if (name === "strong") {
                isTitleData = true;
              }
          },
          ontext(text) {
            if (isTitleData) {
                // const [tag, title, author, date] = text.split(',').map(s => s.trim());
                // tempModel.titleData = { tag, title, author, date };
                const parts = text.split(',').map(part => {
                    const [key, value] = part.split(':').map(s => s.trim());
                    return value;
                  });
                  tempModel.titleData = {
                    tag: parts[0],
                    title: parts[1],
                    author: parts[2],
                    date: parts[3]
                  };
                isTitleData = false;
              } else if (lastOpenedTag === "h1") {
              const tocId = `toc${currentTOCId}`;
              tempModel.tableOfContents[tempModel.tableOfContents.length - 1].title = text;
              tempModel.content.push({
                id: tocId,
                type: 'title',
                text: text,
              });
              currentTOCId++;
            } else if (lastOpenedTag === "h2") {
              tempModel.content.push({
                id: `toc${currentTOCId}`,
                type: 'description',
                text: text,
              });
              currentTOCId++;
            }
             else {
              tempModel.content.push({
                id: `toc${currentTOCId}`,
                type: 'description',
                text: text,
              });
              currentTOCId++;
            }
          },
          onclosetag(tagname) {
            if (tagname === "h1" || tagname === "h2") {
              lastOpenedTag = '';
            }
          }
        }, { decodeEntities: true });
      
        parser.write(htmlInput);
        parser.end();
      
        return tempModel;
      };
      
  
    return (
      <div>
        <NavigationBar />
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          value={editorHtml}
          onChange={handleEditorChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
