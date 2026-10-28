// Thin line icons in the theme's engraved style. Decorative unless a label is passed.
const PATHS = {
  temple: (
    <>
      <path d="M12 3v2M9.5 8.5a2.5 2.5 0 0 1 5 0" />
      <path d="M6 13a6 6 0 0 1 12 0" />
      <path d="M5 13h14v2H5zM4 18h16v2H4zM7 15v3M17 15v3M10.5 15v3h3v-3" />
    </>
  ),
  guidance: (
    <>
      <path d="M12 3l1.2 2.8L16 7l-2.8 1.2L12 11l-1.2-2.8L8 7l2.8-1.2z" />
      <path d="M3 16.5l3.5-2a3 3 0 0 1 2.5-.2l3.5 1.2a1.5 1.5 0 0 1-1 2.8l-3-.8" />
      <path d="M8 18.5l5 1.5a3 3 0 0 0 2.4-.3L21 16a1.6 1.6 0 0 0-2-2.4l-3.5 2" />
    </>
  ),
  community: (
    <>
      <circle cx="12" cy="7.5" r="2.5" />
      <circle cx="5.5" cy="9" r="2" />
      <circle cx="18.5" cy="9" r="2" />
      <path d="M7.5 19a4.5 4.5 0 0 1 9 0M2 18a3.5 3.5 0 0 1 4.5-3.3M22 18a3.5 3.5 0 0 0-4.5-3.3" />
    </>
  ),
  mat: (
    <>
      <rect x="3" y="6" width="5" height="12" rx="2.5" />
      <path d="M5.5 6H19v12H5.5M8 9.5h8M8 14.5h8" />
    </>
  ),
  group: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 1.5v.5M8.5 3l.4.4M15.5 3l-.4.4" />
      <circle cx="6" cy="13" r="2" />
      <circle cx="12" cy="13" r="2" />
      <circle cx="18" cy="13" r="2" />
      <path d="M3 20a3 3 0 0 1 6 0M9 20a3 3 0 0 1 6 0M15 20a3 3 0 0 1 6 0" />
    </>
  ),
  person: (
    <>
      <circle cx="9" cy="6" r="2.5" />
      <path d="M4 20v-4a5 5 0 0 1 9-3" />
      <path d="M14 20c0-4 2.5-6.5 7-7-0.5 4.5-3 7-7 7zM14 20l3.5-3.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  sun: (
    <>
      <path d="M4 17h16M7 17a5 5 0 0 1 10 0" />
      <path d="M12 6v2M5.6 9.6l1.4 1.4M18.4 9.6 17 11M3 14h1.5M19.5 14H21M8 20h8" />
    </>
  ),
  sunset: (
    <>
      <path d="M3 16h18M7 16a5 5 0 0 1 10 0" />
      <path d="M12 5v2M5.6 8.6 7 10M18.4 8.6 17 10M9 19.5h6" />
    </>
  ),
  moon: <path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z" />,
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5M8.5 9.5h1M8.5 13.5h1M8.5 17.5h1M11.5 9.5h4.5M11.5 13.5h4.5M11.5 17.5h4.5" />
    </>
  ),
  share: (
    <>
      <path d="M12 15V3M8 7l4-4 4 4" />
      <path d="M6 11H5v10h14V11h-1" />
    </>
  ),
  printer: (
    <>
      <path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7z" />
    </>
  ),
  pdf: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 13h6M9 16.5h6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19 13 11" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 6c2 2 2.8 5.5 0 9-2.8-3.5-2-7 0-9z" />
      <path d="M12 15c-2.5-.3-5-2.2-6-5.5 3 .2 5 1.8 6 5.5zM12 15c2.5-.3 5-2.2 6-5.5-3 .2-5 1.8-6 5.5z" />
      <path d="M4 17c3 1.5 13 1.5 16 0" />
    </>
  ),
  arrow: <path d="M4 12h15M14 7l5 5-5 5" />,
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.34A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.03.8.81-2.95-.2-.31a8.2 8.2 0 1 1 6.92 3.79Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.68c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z"
    />
  ),
};

export default function Icon({ name, className, label }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : "true"}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
