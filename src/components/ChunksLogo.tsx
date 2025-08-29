
'use client';

export const ChunksLogo = () => {
    return (
      <svg
        width="150"
        height="40"
        viewBox="0 0 160 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="object-contain"
      >
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@700&display=swap');
            .logo-text {
              font-family: 'Alegreya', serif;
              font-size: 32px;
              font-weight: 700;
              fill: hsl(var(--foreground));
            }
          `}
        </style>
        <text x="0" y="30" className="logo-text">Chunks</text>
      </svg>
    );
};
