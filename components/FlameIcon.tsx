export default function FlameIcon({ className, size = 32 }: { className?: string, size?: number }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className || ''}`}
      style={{ width: size, height: size, flexShrink: 0 }}
    >
      <svg
        style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 10px 24px rgba(249,115,22,0.18))' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220 220"
        fill="none"
      >
        {/* Contorno da chama */}
      <path
        className="flame-avatar__body"
        d="
          M 113 20
          L 144 54
          L 158 93
          L 178 117
          L 169 161
          L 136 189
          L 83 189
          L 52 161
          L 42 117
          L 66 79
          L 93 58
          L 83 84
          L 91 97
          L 119 54
          Z
        "
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />

      {/* Olhos */}
      <g className="flame-avatar__face" fill="currentColor">
        <path
          className="flame-avatar__eye-left"
          d="
            M 83 120
            L 93 126
            L 93 137
            L 83 143
            L 74 137
            L 74 126
            Z
          "
        />

        <path
          className="flame-avatar__eye-right"
          d="
            M 136 120
            L 145 126
            L 145 137
            L 136 143
            L 127 137
            L 127 126
            Z
          "
        />
      </g>
    </svg>
    </div>
  );
}
