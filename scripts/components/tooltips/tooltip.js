export default function tooltipDesc(content, tooltipId) {
    return `
        <!-- Trigger tooltip -->
        <p
            data-tooltip-target="${tooltipId}"
            data-tooltip-placement="bottom"
            class="text-gray-600 text-sm leading-relaxed line-clamp-2 cursor-help"
        >
            ${content}
        </p>

        <!-- Tooltip content -->
        <div 
            id="${tooltipId}"
            role="tooltip"
            class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white 
                transition-opacity duration-300 bg-gray-800 rounded-md shadow opacity-0 tooltip"
        >
            <p class="line-clamp-4">${content}</p>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    `;
}
