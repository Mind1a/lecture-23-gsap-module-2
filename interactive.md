```jsx
<div className="bg-linear-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-green-400/50">
  <h2 className="text-3xl font-bold text-white mb-2">
    5️⃣ Interactive Timeline Control
  </h2>
  <p className="text-purple-200 mb-6">
    Control the timeline with buttons and speed!
  </p>

  {/* Animation Area */}
  <div className="bg-slate-800/50 rounded-2xl p-6 h-32 space-y-3 mb-6">
    <div className="ctrl-box1 w-20 h-6 bg-orange-500 rounded-lg"></div>
    <div className="ctrl-box2 w-20 h-6 bg-orange-500 rounded-lg"></div>
    <div className="ctrl-box3 w-20 h-6 bg-orange-500 rounded-lg"></div>
  </div>

  {/* Controls */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
      ▶️ Play
    </button>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
      ⏸️ Pause
    </button>
    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
      ⏪ Reverse
    </button>
    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
      🔄 Restart
    </button>
  </div>

  {/* Speed Control */}
  <div className="bg-slate-800/30 p-4 rounded-xl">
    <h3 className="text-white font-bold mb-3">Speed Control:</h3>
    <div className="flex gap-2">
      {[0.25, 0.5, 1, 2, 3].map((speed) => (
        <button
          key={speed}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            playbackSpeed === speed
              ? "bg-blue-500 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          {speed}x
        </button>
      ))}
    </div>
  </div>
</div>
```
