import React from 'react';

export default function Card({ image, title, subtitle, children, onClick, badge }) {
  return (
    <article
      className="rounded-2xl overflow-hidden p-6 border border-transparent hover:shadow-[0_0_20px_rgba(126,187,191,0.12)] transition-all duration-300 cursor-pointer"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
      style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-text)' }}
    >
      {image && (
        <div className="mb-4 h-44 w-full overflow-hidden rounded-md">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {badge && (
        <div className="mb-2 inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(126,187,191,0.12)', color: 'var(--primary-light)' }}>
          {badge}
        </div>
      )}

      {title && <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-text)' }}>{title}</h3>}
      {subtitle && <p className="text-sm mb-3" style={{ color: 'var(--card-subtitle)' }}>{subtitle}</p>}

      {children && <div className="text-sm leading-relaxed" style={{ color: 'var(--card-body)' }}>{children}</div>}
    </article>
  );
}
