

export const DirectionIcon = ({ direction }: { direction: number }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={"35"} height={"35"} style={{ transform: `rotate(${direction + 90}deg)` }}>
            <g data-name="10-Turn right">
                <circle cx="32" cy="32" r="26" style={{ fill: "#fbfbfb" }} />
                <path d="M32 1a31 31 0 1 0 31 31A31 31 0 0 0 32 1zm0 57a26 26 0 1 1 26-26 26 26 0 0 1-26 26z" style={{ fill: "#48befd" }} />
                <path d="M54.873 51.5a2.5 2.5 0 0 1-2-3.992 26 26 0 0 0 0-31.015 2.5 2.5 0 1 1 4.01-2.985 31 31 0 0 1 0 36.985 2.5 2.5 0 0 1-2.01 1.007zM9.127 51.5a2.5 2.5 0 0 1-2.007-1.007 31 31 0 0 1 0-36.985 2.5 2.5 0 1 1 4.01 2.985 26 26 0 0 0 0 31.015 2.5 2.5 0 0 1-2 3.992z" style={{ fill: "#6bdcff" }} />
                <path d="M37 52a25.974 25.974 0 0 1-21.9-12H30v-3H13.441a26.015 26.015 0 0 1 1.3-24.436 26 26 0 1 0 39.522 32.872A25.9 25.9 0 0 1 37 52z" style={{ fill: "#d6e0eb" }} />
                <path style={{ fill: "#48befd" }} d="M52 32 34 17v10H16v10h18v10l18-15z" />
                <path style={{ fill: "#48befd" }} d="M34 17v10h-4v-8l4-2z" />
                <path style={{ fill: "#2a84c9" }} d="M34 37v10l-4-2v-8h4zM12 27h4v10h-4zM33 25a1 1 0 0 1-1-1v-6l-2 1v8h4v-2z" />
                <path d="M34 37h-4v2a2 2 0 0 1 2 2v5l2 1zM14 27v4a2 2 0 0 0 2 2v4h-4V27z" style={{ fill: "#1c69a1" }} />
                <path d="M34 17v10H22a2 2 0 0 0 0 4h22l4.954 3.538L52 32z" style={{ fill: "#6bdcff" }} />
                <circle cx="32" cy="32" r="31" style={{ fill: "none", stroke: "#000", strokeLinejoin: "round", strokeWidth: "2px" }} />
                <path d="M57.694 28q.153.988.23 2M58 32a25.972 25.972 0 1 1-.7-6" style={{ fill: "none", stroke: "#000", strokeLinejoin: "round", strokeWidth: "2px" }} />
                <path style={{ fill: "none", stroke: "#000", strokeLinejoin: "round", strokeWidth: "2px" }} d="M30 40v5l4 2M34 17l-4 2v5" />
                <path style={{ fill: "none", stroke: "#000", strokeLinejoin: "round", strokeWidth: "2px" }} d="M19 27h-3v10h18v10l18-15-18-15v10H21M16 27h-4v10h4" />
            </g>
        </svg>
    )
}
