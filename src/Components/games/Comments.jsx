import { useState, useEffect } from "react";

const Comments = ({ gameId }) => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // Load comments when opening
  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("comments")) || {};
    setList(all[gameId] || []);
  }, [gameId]);

  // On send
  const send = () => {
    if (!text.trim()) return;

    const newOne = { content: text, time: new Date().toLocaleString() };
    const all = JSON.parse(localStorage.getItem("comments")) || {};
    const updated = [newOne, ...(all[gameId] || [])];

    all[gameId] = updated;
    localStorage.setItem("comments", JSON.stringify(all));

    setList(updated);
    setText("");
  };

  return (
    <div className="bg-[#1a1a1a] text-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h3 className="text-xl font-semibold mb-4 border-b border-[#333] pb-2">Comments</h3>

      {/* Input field and send button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
        <input
          className="flex-1 px-4 py-2 rounded bg-[#facc15] text-black placeholder:text-gray-700 focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment..."
        />
        <button
          onClick={send}
          className="px-5 py-2 bg-[#ff6b00] hover:bg-[#e65c00] text-white font-semibold rounded transition"
        >
          Send
        </button>
      </div>

      {/* Displaying comments */}
      <ul className="space-y-4">
        {list.length === 0 && (
          <p className="text-gray-400 text-sm">No comments yet. Be the first!</p>
        )}

        {list.map((item, i) => (
          <li key={i} className="bg-[#2b2b2b] p-4 rounded-lg">
            <p className="text-sm">{item.content}</p>
            <small className="block text-gray-500 mt-2">{item.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
