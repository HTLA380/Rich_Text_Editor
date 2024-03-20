import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const TinyMCE = () => {
  return (
    <Editor
      tinymceScriptSrc={"/tinymce/js/tinymce/tinymce.min.js"}
      initialValue="<p>This is the initial content of the editor.</p>"
      init={{
        skin: "tinymce-5",
        plugins:
          "ai advcode advlist advtable advtemplate anchor autocorrect autolink autosave casechange charmap checklist codesample directionality editimage emoticons footnotes formatpainter help image insertdatetime link linkchecker lists markdown media mediaembed mergetags nonbreaking pagebreak permanentpen powerpaste searchreplace table tableofcontents tinycomments tinymcespellchecker typography visualblocks visualchars wordcount",

        toolbar:
          "undo redo spellcheckdialog | aidialog aishortcuts | blocks | fontfamily |fontsizeinput | bold italic underline forecolor backcolor | link image addcomment showcomments  | align lineheight checklist bullist numlist | indent outdent | inserttemplate | removeformat typography | table",

        editable_root: true,
        height: "100vh",
        toolbar_sticky: true,

        icons: "thin",
        autosave_restore_when_empty: true,

        spellchecker_active: true,
        spellchecker_language: "en_US",
        spellchecker_languages:
          "English (United States)=en_US,English (United Kingdom)=en_GB,Danish=da,French=fr,German=de,Italian=it,Polish=pl,Spanish=es,Swedish=sv",

        typography_langs: ["en-US"],
        typography_default_lang: "en-US",

        tinycomments_mode: "embedded",
        tinycomments_author: "rmartel",
        tinycomments_author_name: "Rosalina Martel",
        tinycomments_author_avatar:
          "https://www.tiny.cloud/images/avatars/avatar-RosalinaMartel.jpg",

        sidebar_show: "showcomments",

        mergetags_list: [
          {
            value: "Document.Title",
            title: "Document Title",
          },
          {
            value: "Publish.Date",
            title: "Publish Date",
          },
          {
            value: "Author.Name",
            title: "Author Name",
          },
        ],

        advtemplate_templates: [
          {
            title: "Non-compete clause",
            content:
              "<h3>NON-COMPETE</h3>\n<p>This agreement contains a non-compete clause, which prohibits the&nbsp;{{Employee.Name}} from directly or indirectly engaging in similar activities to those performed in their employment with the Company, within {{Distance.Miles}} miles of the Company&rsquo;s business premises, for a period of {{Noncompete.Years}} years after the termination of their employment. This clause shall apply regardless of whether the Employee is employed by a competitor or any other third party.</p>",
          },
          {
            title: "Corporate hierarchy diagram",
            content:
              '<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.postimg.cc/tJ82QN1H/corporate-hierarchy.png" width="282" height="248"></p>',
          },
          {
            title: "More reusable document content",
            content: "<p>Insert any HTML content as a template!</p>",
          },
        ],

        ai_shortcuts: [
          {
            title: "Summarize content",
            prompt:
              "Provide the key points and concepts in this content in a succinct summary.",
          },
          {
            title: "Improve writing",
            prompt:
              "Rewrite this content with no spelling mistakes, proper grammar, and with more descriptive language, using best writing practices without losing the original meaning.",
          },
        ],

        content_style: `
        body {
          background: #fff;
        }

        /* Disable the blue "focus" border for the editable region */
        .editable-section:focus-visible {
          outline: none !important;
        }

        .header,
        .footer {
          font-size: 0.8rem;
          color: #ddd;
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 0 0 1rem 0;
        }

        .header .right-text {
          text-align: right;
        }

        .footer {
          padding:2rem 0 0 0;
          text-align: center;
        }

        /* Apply page-like styling */
        @media (min-width: 840px) {
          html {
            background: #eceef4;
            min-height: 100%;
            padding: 0.5rem;
          }

          body {
            background-color: #fff;
            box-shadow: 0 0 4px rgba(0, 0, 0, .15);
            box-sizing: border-box;
            margin: 1rem auto 0;
            max-width: 820px;
            min-height: calc(100vh - 1rem);
            padding: 2rem 6rem 2rem 6rem;
          }
        }
      `,
      }}
    />
  );
};

export default TinyMCE;
