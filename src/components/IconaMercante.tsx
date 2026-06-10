export default function IconaMercante({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Laccio del sacchetto */}
      <path
        d="M24 14 C24 10 28 7 32 7 C36 7 40 10 40 14"
        stroke="#92400e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Nodo */}
      <ellipse cx="32" cy="17" rx="7" ry="4" fill="#78350f" />
      {/* Corpo sacchetto */}
      <path
        d="M14 36 C12 28 18 20 32 20 C46 20 52 28 50 36 C48 46 42 56 32 56 C22 56 16 46 14 36 Z"
        fill="#d97706"
      />
      {/* Ombra sacchetto */}
      <path
        d="M32 20 C46 20 52 28 50 36 C48 46 42 56 32 56"
        fill="#b45309"
        opacity="0.4"
      />
      {/* Monete che fuoriescono */}
      <ellipse cx="32" cy="21" rx="9" ry="3.5" fill="#fbbf24" />
      <ellipse cx="26" cy="19.5" rx="5" ry="2" fill="#fcd34d" />
      <ellipse cx="38" cy="19.5" rx="5" ry="2" fill="#fcd34d" />
      {/* Simbolo moneta sul sacchetto */}
      <circle cx="32" cy="39" r="9" fill="#fbbf24" opacity="0.9" />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#78350f"
        fontFamily="serif"
      >
        $
      </text>
      {/* Luccichio */}
      <circle cx="22" cy="30" r="2" fill="white" opacity="0.25" />
    </svg>
  );
}
