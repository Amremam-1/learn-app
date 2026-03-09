import React, { useRef, useEffect, useState } from "react";
import { FaBold, FaItalic, FaListUl } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

const TextEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);
  const [selection, setSelection] = useState(null);

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      setSelection(sel.getRangeAt(0));
    }
  };

  const restoreSelection = () => {
    const sel = window.getSelection();
    if (selection && sel) {
      sel.removeAllRanges();
      sel.addRange(selection);
    }
  };

  const execCommand = (command, arg = null) => {
    editorRef.current.focus();
    restoreSelection();

    document.execCommand(command, false, arg);

    saveSelection();

    // Trigger change
    if (onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleLink = () => {
    saveSelection();
    const url = prompt("Enter URL:", "https://");
    if (url) {
      execCommand("createLink", url);
    }
  };

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  return (
    <div className="rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b border-[#CBD5E1]">
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => execCommand("bold")}
          className="p-2 text-[#475569] hover:text-[#1d4ed8] rounded"
        >
          <FaBold />
        </button>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => execCommand("italic")}
          className="p-2 text-[#475569] hover:text-[#1d4ed8] rounded"
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => execCommand("insertUnorderedList")}
          className="p-2 text-[#475569] hover:text-[#1d4ed8] rounded"
        >
          <FaListUl />
        </button>
        <div className="w-px h-6 bg-[#CBD5E1] mx-2" />
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleLink}
          className="p-2 text-[#475569] hover:text-[#1d4ed8] rounded"
        >
          <IoMdLink className="size-[23px]" />
        </button>
      </div>

      {/* Editor Container */}
      <div className="relative min-h-[176px]">
        {(!value || value === "<br>") && (
          <span className="absolute top-3 left-3 text-[#94a3b8] pointer-events-none">
            {placeholder}
          </span>
        )}
        <div
          ref={editorRef}
          contentEditable
          className="min-h-[176px] p-3 bg-white outline-none 
                     [&_ul]:list-disc [&_ul]:ml-6 
                     [&_ol]:list-decimal [&_ol]:ml-6 
                     [&_a]:text-blue-600 [&_a]:underline"
          onInput={(e) => onChange(e.currentTarget.innerHTML)}
          onMouseUp={saveSelection}
          onKeyUp={saveSelection}
          onBlur={saveSelection}
        />
      </div>
    </div>
  );
};

export default TextEditor;
