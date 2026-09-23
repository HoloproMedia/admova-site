/* @ds-bundle: {"format":4,"namespace":"AdmovaDesignSystem_adee6e","components":[{"name":"GeoRadius","sourcePath":"components/brand/GeoRadius.jsx"},{"name":"SignalBand","sourcePath":"components/brand/SignalBand.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ChannelCard","sourcePath":"components/marketing/ChannelCard.jsx"},{"name":"CtaBand","sourcePath":"components/marketing/CtaBand.jsx"},{"name":"FaqAccordion","sourcePath":"components/marketing/FaqAccordion.jsx"},{"name":"LogoWall","sourcePath":"components/marketing/LogoWall.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"StatRow","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"StepList","sourcePath":"components/marketing/StepList.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"PillTabs","sourcePath":"components/navigation/PillTabs.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/brand/GeoRadius.jsx":"9455653d9e66","components/brand/SignalBand.jsx":"9d5c1f87b6dc","components/brand/Wordmark.jsx":"24aa5c63c85d","components/core/Badge.jsx":"70526d31bbdd","components/core/Button.jsx":"46f93e0f27be","components/core/Card.jsx":"3738fd9e51e9","components/core/Eyebrow.jsx":"e7f14a7eafc3","components/core/Icon.jsx":"729d98cd0660","components/core/SectionHeading.jsx":"0ac55b1c79a3","components/forms/Checkbox.jsx":"1c227417f451","components/forms/Field.jsx":"e44aca7f694c","components/forms/Input.jsx":"670b3d68b46e","components/forms/Select.jsx":"1df0293c417b","components/forms/Textarea.jsx":"c05e1c82e890","components/marketing/ChannelCard.jsx":"a69ea8a1648b","components/marketing/CtaBand.jsx":"1975be7a637c","components/marketing/FaqAccordion.jsx":"7d945045f820","components/marketing/LogoWall.jsx":"9051b92a4dab","components/marketing/StatBlock.jsx":"a3162a592d7b","components/marketing/StepList.jsx":"be23a28785e5","components/marketing/Testimonial.jsx":"4365bb89af57","components/navigation/PillTabs.jsx":"180cea543772","components/navigation/SiteFooter.jsx":"9bd8d74126cc","components/navigation/TopNav.jsx":"2d84ab418b61","ui_kits/site-vitrine/App.jsx":"e1b85cfc953a","ui_kits/site-vitrine/Contact.jsx":"02166d0feb32","ui_kits/site-vitrine/Geociblage.jsx":"26b4f3eb41fc","ui_kits/site-vitrine/Home.jsx":"23f780ce201d","ui_kits/site-vitrine/Offre.jsx":"bd6a20d85ba8","ui_kits/site-vitrine/References.jsx":"c5582c5af00d","ui_kits/site-vitrine/shell.jsx":"a9f4535c17ba"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AdmovaDesignSystem_adee6e = window.AdmovaDesignSystem_adee6e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GeoRadius.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Motif visuel central d'Admova : le rayon de géociblage posé sur une trame cartographique. */
function GeoRadius({
  label = '3 km',
  sublabel,
  radius = 0.62,
  pulse = true,
  surface = 'sand',
  size = 320,
  style,
  ...rest
}) {
  const bg = {
    sand: 'var(--surface-sand)',
    soft: 'var(--surface-sand-soft)',
    white: 'var(--surface-canvas)',
    ink: 'var(--surface-ink)'
  }[surface];
  const onInk = surface === 'ink';
  const ringColor = onInk ? 'rgba(232,178,26,0.45)' : 'var(--geo-ring)';
  const gridColor = onInk ? 'rgba(246,241,231,0.07)' : 'var(--geo-grid)';
  const d = size * radius;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1',
      minHeight: 180,
      background: bg,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: onInk ? '1px solid var(--border-on-ink)' : '1px solid var(--border-sand)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes admova-geo-pulse{0%{transform:translate(-50%,-50%) scale(.82);opacity:.9}70%{transform:translate(-50%,-50%) scale(1.14);opacity:0}100%{transform:translate(-50%,-50%) scale(1.14);opacity:0}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
      backgroundSize: '28px 28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `linear-gradient(${gridColor} 2px, transparent 2px), linear-gradient(74deg, transparent 48%, ${gridColor} 48%, ${gridColor} 49%, transparent 49%)`,
      backgroundSize: '100% 168px, 100% 100%',
      backgroundPosition: '0 62%, 0 0'
    }
  }), [1, 0.68, 0.38].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: `${radius * 100 * k}%`,
      aspectRatio: '1/1',
      transform: 'translate(-50%,-50%)',
      borderRadius: '50%',
      border: `1px ${i === 0 ? 'solid' : 'dashed'} ${ringColor}`,
      background: i === 0 ? 'var(--geo-fill)' : 'transparent'
    }
  })), pulse ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: `${radius * 100}%`,
      aspectRatio: '1/1',
      borderRadius: '50%',
      border: `1px solid var(--orange-500)`,
      animation: 'admova-geo-pulse var(--duration-geo-pulse) var(--ease-out) infinite'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--orange-500)',
      boxShadow: '0 0 0 4px rgba(216,90,26,0.18)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: `calc(50% - ${d / 2}px)`,
      transform: 'translate(-50%,-50%)',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      background: onInk ? 'var(--ink-900)' : 'var(--white)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-1)',
      border: onInk ? '1px solid var(--border-on-ink)' : '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-mono)'
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      fontSize: 11,
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-subtle)'
    }
  }, sublabel) : null));
}
Object.assign(__ds_scope, { GeoRadius });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GeoRadius.jsx", error: String((e && e.message) || e) }); }

// components/brand/SignalBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Bande signature Admova : le dégradé orange → ambre → sable qui clôt chaque page. */
function SignalBand({
  height = 10,
  ticks = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height,
      width: '100%',
      background: 'var(--signal-band)',
      overflow: 'hidden',
      ...style
    }
  }, rest), ticks ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.34) 0 1px, transparent 1px 24px)'
    }
  }) : null);
}
Object.assign(__ds_scope, { SignalBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SignalBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  color: 'logo-admova-1200.png',
  ink: 'logo-admova-ink.png',
  white: 'logo-admova-white.png'
};
function Wordmark({
  tone = 'color',
  height = 26,
  assetsPath = '/assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetsPath}/${SRC[tone]}`,
    alt: "admova",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  default: {
    background: 'var(--surface-canvas)',
    border: '1px solid var(--border-soft)'
  },
  raised: {
    background: 'var(--surface-canvas)',
    border: '1px solid var(--border-soft)',
    boxShadow: 'var(--shadow-2)'
  },
  sand: {
    background: 'var(--surface-sand)',
    border: '1px solid var(--border-sand)',
    color: 'var(--text-on-sand)'
  },
  sandSoft: {
    background: 'var(--surface-sand-soft)',
    border: '1px solid var(--border-sand)'
  },
  ink: {
    background: 'var(--surface-ink)',
    border: '1px solid var(--border-on-ink)',
    color: 'var(--text-on-ink)'
  },
  featured: {
    background: 'var(--surface-sand)',
    border: '2px solid var(--border-brand)'
  },
  bare: {
    background: 'transparent',
    border: '1px solid transparent'
  }
};
function Card({
  surface = 'default',
  pad = 'md',
  interactive,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const padding = {
    none: 0,
    sm: 'var(--space-5)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  }[pad];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      ...surfaces[surface],
      transition: 'var(--transition-surface)',
      ...(interactive ? {
        cursor: 'pointer'
      } : null),
      ...(hover ? {
        transform: 'translateY(-2px)',
        boxShadow: 'var(--shadow-3)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'brand',
  style,
  ...rest
}) {
  const color = {
    brand: 'var(--orange-600)',
    muted: 'var(--text-subtle)',
    onInk: 'var(--text-on-ink-muted)'
  }[tone];
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icônes Lucide (lucide-static via CDN) appliquées en masque CSS pour hériter de currentColor. */
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  strokeWidth,
  style,
  className,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: 'currentColor',
      maskImage: url,
      WebkitMaskImage: url,
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    background: 'var(--orange-500)',
    color: 'var(--white)'
  },
  accent: {
    background: 'var(--amber-400)',
    color: 'var(--ink-900)'
  },
  sand: {
    background: 'var(--sand-200)',
    color: 'var(--ink-900)'
  },
  ink: {
    background: 'var(--ink-900)',
    color: 'var(--text-on-ink)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-muted)',
    boxShadow: 'inset 0 0 0 1px var(--border-default)'
  },
  success: {
    background: 'var(--success-100)',
    color: 'var(--success-500)'
  },
  onInk: {
    background: 'rgba(246,241,231,0.12)',
    color: 'var(--text-on-ink)'
  }
};
function Badge({
  tone = 'sand',
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-caption)',
      fontWeight: 'var(--weight-semibold)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      ...tones[tone],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  font: 'var(--type-button)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-control)',
  appearance: 'none'
};
const sizes = {
  sm: {
    padding: '7px 14px',
    fontSize: 'var(--size-caption)',
    minHeight: 34
  },
  md: {
    padding: '11px 20px',
    minHeight: 44
  },
  lg: {
    padding: '15px 28px',
    fontSize: 'var(--size-body)',
    minHeight: 52
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-brand)'
  },
  ink: {
    background: 'var(--action-ink)',
    color: 'var(--text-on-ink)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    borderColor: 'var(--border-strong)'
  },
  sand: {
    background: 'var(--surface-sand)',
    color: 'var(--text-on-sand)',
    borderColor: 'var(--border-sand)'
  },
  onSand: {
    background: 'var(--white)',
    color: 'var(--text-strong)',
    borderColor: 'var(--border-sand)'
  },
  onInk: {
    background: 'transparent',
    color: 'var(--text-on-ink)',
    borderColor: 'var(--border-on-ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)'
  },
  link: {
    background: 'transparent',
    color: 'var(--text-link)',
    padding: 0,
    minHeight: 0,
    borderRadius: 0
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-hover)'
  },
  ink: {
    background: 'var(--action-ink-hover)'
  },
  outline: {
    borderColor: 'var(--ink-900)'
  },
  sand: {
    background: 'var(--surface-sand-deep)'
  },
  onSand: {
    borderColor: 'var(--ink-300)'
  },
  onInk: {
    background: 'rgba(246,241,231,0.08)'
  },
  ghost: {
    background: 'var(--surface-sand)'
  },
  link: {
    color: 'var(--text-link-hover)',
    textDecoration: 'underline',
    textUnderlineOffset: 3
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth,
  disabled,
  as,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      background: 'var(--ink-100)',
      color: 'var(--text-disabled)',
      borderColor: 'transparent',
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 18 : 16
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 18 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'default',
  actions,
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 760 : 820,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--orange-600)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h1)',
      letterSpacing: 'var(--tracking-display)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead)',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)',
      maxWidth: 'var(--measure-lead)'
    }
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 20,
      height: 20,
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      display: 'grid',
      placeItems: 'center',
      transition: 'var(--transition-control)',
      background: checked ? 'var(--orange-500)' : 'var(--surface-canvas)',
      border: `1px solid ${checked ? 'var(--orange-500)' : 'var(--border-strong)'}`,
      color: 'var(--white)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--danger-500)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    height: 46,
    font: 'var(--type-body)',
    color: 'var(--text-strong)',
    background: 'var(--surface-canvas)',
    borderRadius: 'var(--radius-md)',
    border: `1px solid ${invalid ? 'var(--danger-500)' : focus ? 'var(--orange-500)' : 'var(--border-strong)'}`,
    boxShadow: focus ? '0 0 0 3px rgba(216,90,26,0.14)' : 'none',
    padding: icon ? '0 14px 0 42px' : '0 14px',
    transition: 'var(--transition-control)',
    outline: 'none',
    appearance: 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      color: focus ? 'var(--orange-500)' : 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 46,
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface-canvas)',
      borderRadius: 'var(--radius-md)',
      padding: '0 40px 0 14px',
      border: `1px solid ${invalid ? 'var(--danger-500)' : focus ? 'var(--orange-500)' : 'var(--border-strong)'}`,
      boxShadow: focus ? '0 0 0 3px rgba(216,90,26,0.14)' : 'none',
      transition: 'var(--transition-control)',
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      color: 'var(--text-subtle)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      resize: 'vertical',
      background: 'var(--surface-canvas)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3) var(--space-4)',
      border: `1px solid ${invalid ? 'var(--danger-500)' : focus ? 'var(--orange-500)' : 'var(--border-strong)'}`,
      boxShadow: focus ? '0 0 0 3px rgba(216,90,26,0.14)' : 'none',
      transition: 'var(--transition-control)',
      outline: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ChannelCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChannelCard({
  icon,
  title,
  description,
  meta = [],
  tone = 'default',
  footer,
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-8)',
      borderRadius: 'var(--radius-lg)',
      transition: 'var(--transition-surface)',
      background: onInk ? 'var(--surface-ink-soft)' : 'var(--surface-canvas)',
      border: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-soft)'}`,
      boxShadow: hover ? 'var(--shadow-3)' : 'var(--shadow-1)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: onInk ? 'rgba(216,90,26,0.18)' : 'var(--surface-sand)',
      border: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-sand)'}`,
      color: 'var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h4)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, description), meta.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'auto'
    }
  }, meta.map(m => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: m,
    tone: onInk ? 'onInk' : 'sand'
  }, m))) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { ChannelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ChannelCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CtaBand({
  eyebrow,
  title,
  lead,
  actions,
  surface = 'sand',
  style,
  ...rest
}) {
  const onInk = surface === 'ink';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: onInk ? 'var(--surface-ink)' : surface === 'brand' ? 'var(--surface-brand)' : 'var(--surface-sand)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-24) var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)',
      textAlign: 'center',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: surface === 'brand' ? 'rgba(255,255,255,0.72)' : onInk ? 'var(--text-on-ink-muted)' : 'var(--orange-600)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display)',
      letterSpacing: 'var(--tracking-display)',
      maxWidth: 800,
      color: surface === 'brand' ? 'var(--white)' : onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead)',
      maxWidth: 'var(--measure-lead)',
      color: surface === 'brand' ? 'rgba(255,255,255,0.86)' : onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FaqAccordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FaqAccordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-default)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-6) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--type-h5)',
        color: isOpen ? 'var(--orange-600)' : 'var(--text-strong)',
        transition: 'var(--transition-control)'
      }
    }, it.question, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 18
    })), isOpen ? /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-muted)',
        maxWidth: 'var(--measure-prose)',
        paddingBottom: 'var(--space-6)'
      }
    }, it.answer) : null);
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  names = [],
  columns = 6,
  tone = 'default',
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      borderTop: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-default)'}`,
      borderLeft: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-default)'}`,
      ...style
    }
  }, rest), names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: 'var(--space-6) var(--space-4)',
      display: 'grid',
      placeItems: 'center',
      minHeight: 84,
      borderRight: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-default)'}`,
      borderBottom: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-default)'}`,
      font: 'var(--type-body)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      textAlign: 'center',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-subtle)'
    }
  }, n)));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  note,
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-stat)',
      letterSpacing: 'var(--tracking-display)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, label), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-subtle)'
    }
  }, note) : null);
}
function StatRow({
  items = [],
  tone = 'default',
  divided = true,
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
      gap: 'var(--space-8)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: divided && i > 0 ? 'var(--space-8)' : 0,
      borderLeft: divided && i > 0 ? `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-default)'}` : 'none'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, _extends({}, it, {
    tone: tone
  })))));
}
Object.assign(__ds_scope, { StatBlock, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepList({
  steps = [],
  tone = 'default',
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--type-mono)',
      fontSize: 14,
      background: onInk ? 'rgba(246,241,231,0.08)' : 'var(--surface-sand)',
      border: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-sand)'}`,
      color: 'var(--orange-500)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h5)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, s.description)))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepList.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  author,
  role,
  company,
  surface = 'sand',
  style,
  ...rest
}) {
  const onInk = surface === 'ink';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      padding: 'var(--space-8)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      background: onInk ? 'var(--surface-ink-soft)' : surface === 'white' ? 'var(--surface-canvas)' : 'var(--surface-sand)',
      border: `1px solid ${onInk ? 'var(--border-on-ink)' : 'var(--border-sand)'}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-heading)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, "\xAB ", quote, " \xBB"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: onInk ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-subtle)'
    }
  }, [role, company].filter(Boolean).join(' · '))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PillTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillTabs({
  items = [],
  value,
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const onInk = tone === 'onInk';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    const on = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        font: 'var(--type-button)',
        padding: '8px 16px',
        borderRadius: 'var(--radius-full)',
        cursor: 'pointer',
        transition: 'var(--transition-control)',
        background: on ? onInk ? 'var(--sand-100)' : 'var(--ink-900)' : onInk ? 'transparent' : 'var(--surface-canvas)',
        color: on ? onInk ? 'var(--ink-900)' : 'var(--text-on-ink)' : onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)',
        border: `1px solid ${on ? onInk ? 'var(--sand-100)' : 'var(--ink-900)' : onInk ? 'var(--border-on-ink)' : 'var(--border-default)'}`
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { PillTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PillTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  assetsPath = '/assets',
  legal,
  social = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SignalBand, {
    height: 10
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sand)',
      color: 'var(--text-on-sand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--container-gutter) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: 28,
    assetsPath: assetsPath
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: '34ch'
    }
  }, "R\xE9gie publicitaire mobile et TV g\xE9olocalis\xE9e. Votre publicit\xE9, uniquement l\xE0 o\xF9 vos clients se trouvent.")), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--container-gutter) var(--space-10)',
      borderTop: '1px solid var(--border-sand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, legal), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      color: 'var(--text-subtle)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: 'inherit',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 18
  })))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopNav({
  links = [],
  active,
  onNavigate,
  assetsPath = '/assets',
  cta = 'Demander une étude',
  onCta,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'saturate(140%) blur(12px)',
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SignalBand, {
    height: 3,
    ticks: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-gutter)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]?.id);
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: 24,
    assetsPath: assetsPath
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'var(--space-4)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.id);
    },
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      textDecoration: 'none',
      color: active === l.id ? 'var(--text-strong)' : 'var(--text-muted)',
      paddingBottom: 3,
      borderBottom: `2px solid ${active === l.id ? 'var(--orange-500)' : 'transparent'}`,
      transition: 'var(--transition-control)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+33",
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "01 84 80 00 00"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ink",
    size: "sm",
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/App.jsx
try { (() => {
const LINKS = [{
  id: 'accueil',
  label: 'Accueil'
}, {
  id: 'geo',
  label: 'Géociblage'
}, {
  id: 'offre',
  label: 'Nos offres'
}, {
  id: 'refs',
  label: 'Références'
}, {
  id: 'contact',
  label: 'Contact'
}];
function App() {
  const [page, setPage] = React.useState('accueil');
  const go = id => {
    setPage(id);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    links: LINKS,
    active: page,
    onNavigate: go,
    assetsPath: ASSETS,
    onCta: () => go('contact')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, page === 'accueil' && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), page === 'geo' && /*#__PURE__*/React.createElement(Geociblage, {
    go: go
  }), page === 'offre' && /*#__PURE__*/React.createElement(Offre, {
    go: go
  }), page === 'refs' && /*#__PURE__*/React.createElement(References, {
    go: go
  }), page === 'contact' && /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    assetsPath: ASSETS,
    legal: "\xA9 2026 Admova \u2014 R\xE9gie publicitaire mobile et TV g\xE9olocalis\xE9e.",
    social: ['linkedin', 'youtube'],
    columns: [{
      title: 'Offre',
      links: ['Mobile in-app', 'TV connectée', 'Géociblage', 'Formats']
    }, {
      title: 'Entreprise',
      links: ['À propos', 'Références', 'Actualités', 'Recrutement']
    }, {
      title: 'Légal',
      links: ['Mentions légales', 'Confidentialité', 'Cookies', 'CGV']
    }]
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Contact.jsx
try { (() => {
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.95fr 1.05fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\xC9tude de zone",
    title: "Dites-nous o\xF9 vous vendez.",
    lead: "Nous revenons vers vous sous 48 h avec l'audience disponible autour de chaque point de vente."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, [['phone', '01 84 80 00 00'], ['mail', 'contact@admova.fr'], ['map-pin', 'Paris, France']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), t))), /*#__PURE__*/React.createElement(GeoRadius, {
    label: "Votre zone",
    radius: 0.55,
    surface: "soft",
    style: {
      maxWidth: 300
    }
  })), /*#__PURE__*/React.createElement(Card, {
    surface: "sand",
    pad: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "badge-check"
  }, "Demande envoy\xE9e"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Merci. On vous rappelle sous 48 h."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Un conseiller Admova pr\xE9pare l'estimation d'audience de votre zone."), /*#__PURE__*/React.createElement(Button, {
    variant: "onSand",
    onClick: () => setSent(false)
  }, "Envoyer une autre demande")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Pr\xE9nom et nom",
    required: true,
    htmlFor: "c-n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-n",
    placeholder: "Camille Martin"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Enseigne",
    required: true,
    htmlFor: "c-e"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-e",
    placeholder: "Nom de l'enseigne"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail professionnel",
    required: true,
    htmlFor: "c-m"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-m",
    type: "email",
    placeholder: "camille@enseigne.fr"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "T\xE9l\xE9phone",
    htmlFor: "c-t"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-t",
    placeholder: "06 12 34 56 78"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Adresse du point de vente",
    required: true,
    htmlFor: "c-a",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-a",
    icon: "map-pin",
    placeholder: "12 rue de la R\xE9publique, 69002 Lyon"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nombre de points de vente",
    htmlFor: "c-p"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "c-p",
    placeholder: "Choisir",
    options: ['1', '2 à 10', '11 à 50', 'Plus de 50']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Canal souhait\xE9",
    htmlFor: "c-c"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "c-c",
    placeholder: "Choisir",
    options: ['Mobile in-app', 'TV connectée', 'Les deux']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Votre besoin",
    htmlFor: "c-b",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-b",
    rows: 4,
    placeholder: "Quelle zone couvrir ? Sur quelle p\xE9riode ? Quel objectif ?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "J'accepte d'\xEAtre recontact\xE9 par un conseiller Admova.",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    type: "submit",
    iconAfter: "arrow-right"
  }, "Demander mon \xE9tude"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)'
    }
  }, "R\xE9ponse sous 48 h ouvr\xE9es."))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Geociblage.jsx
try { (() => {
function Geociblage({
  go
}) {
  const [rayon, setRayon] = React.useState('3 km');
  const map = {
    '500 m': 0.3,
    '3 km': 0.58,
    '10 km': 0.78,
    '30 km': 0.94
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "G\xE9ociblage",
    title: "Vous fixez le rayon. Nous ne diffusons qu'\xE0 l'int\xE9rieur.",
    lead: "C'est la seule chose qui compte : une publicit\xE9 vue par quelqu'un qui peut \xEAtre chez vous dans dix minutes."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sand-soft)',
      borderTop: '1px solid var(--border-sand)',
      borderBottom: '1px solid var(--border-sand)',
      padding: 'var(--section-y-tight) 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.85fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Simulateur"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Choisissez un rayon."), /*#__PURE__*/React.createElement(PillTabs, {
    items: Object.keys(map),
    value: rayon,
    onChange: setRayon
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, [['store', 'Zone de proximité immédiate — restauration, retail alimentaire'], ['car-front', 'Zone de déplacement — concessions, grandes surfaces'], ['building-2', 'Zone d\'agglomération — immobilier, services']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), t)))), /*#__PURE__*/React.createElement(GeoRadius, {
    label: rayon,
    sublabel: "Rayon de diffusion",
    radius: map[rayon],
    surface: "white"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Le d\xE9roul\xE9",
    title: "Quatre \xE9tapes, trois jours."
  }), /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: 'Vous nous transmettez vos adresses',
      description: 'Un fichier, un lien Google Maps, ou votre liste de magasins.'
    }, {
      title: 'Nous traçons les zones',
      description: 'Un rayon par point de vente, ajusté au terrain : axe routier, centre commercial, zone piétonne.'
    }, {
      title: 'Vous validez le plan de diffusion',
      description: 'Inventaire mobile et TV, volume d\'impressions estimé, période.'
    }, {
      title: 'La campagne part',
      description: 'Suivi des impressions par zone pendant toute la diffusion.'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "sand",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ce que \xE7a change"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h4)',
      marginTop: 'var(--space-3)',
      color: 'var(--text-strong)'
    }
  }, "Z\xE9ro impression hors de votre zone."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)'
    }
  }, "Le ciblage se fait sur la position r\xE9elle du mobile, pas sur une d\xE9claration ni un code postal.")), /*#__PURE__*/React.createElement(Card, {
    surface: "default",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "1 Md",
    label: "d'impressions diffus\xE9es",
    note: "Toutes campagnes depuis 2020"
  })), /*#__PURE__*/React.createElement(Card, {
    surface: "default",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "267",
    label: "campagnes g\xE9olocalis\xE9es",
    note: "Restauration, distribution, automobile"
  }))))), /*#__PURE__*/React.createElement(Section, {
    surface: "sand",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions fr\xE9quentes",
    title: "Ce qu'on nous demande le plus souvent."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(FaqAccordion, {
    items: [{
      question: "Jusqu'où descend la précision du ciblage ?",
      answer: "Au mètre. Vous définissez un rayon autour de votre point de vente ; seuls les mobiles présents dans cette zone sont exposés à la publicité."
    }, {
      question: 'Puis-je couvrir plusieurs points de vente ?',
      answer: "Oui, avec un rayon différent par point de vente si nécessaire. Les enseignes à réseau pilotent ainsi plusieurs centaines de zones dans une même campagne."
    }, {
      question: 'Quels formats sont diffusés ?',
      answer: "L'interstitiel plein écran sur mobile, et le spot vidéo sur télévision connectée en replay ou sur les chaînes gratuites en streaming."
    }, {
      question: 'Comment mesure-t-on les résultats ?',
      answer: 'Impressions par zone, couverture et répétition. Les indicateurs de visites en point de vente sont étudiés au cas par cas.'
    }]
  }))));
}
Object.assign(window, {
  Geociblage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Geociblage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Home.jsx
try { (() => {
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      paddingTop: 'var(--space-24)',
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sand",
    icon: "target"
  }, "R\xE9gie mobile & TV g\xE9olocalis\xE9e"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-hero)',
      letterSpacing: 'var(--tracking-hero)',
      color: 'var(--text-strong)'
    }
  }, "Votre publicit\xE9,", /*#__PURE__*/React.createElement("br", null), "uniquement l\xE0 o\xF9", /*#__PURE__*/React.createElement("br", null), "sont vos clients."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-lead)'
    }
  }, "Vous tracez un rayon autour de votre point de vente. Nous diffusons en plein \xE9cran sur mobile et en TV connect\xE9e \u2014 et seulement \xE0 l'int\xE9rieur de cette zone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconAfter: "arrow-right",
    onClick: () => go('contact')
  }, "Demander une \xE9tude de zone"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('geo')
  }, "Comment \xE7a marche"))), /*#__PURE__*/React.createElement(GeoRadius, {
    label: "3 km",
    sublabel: "Autour du point de vente",
    radius: 0.66
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sand)',
      borderTop: '1px solid var(--border-sand)',
      borderBottom: '1px solid var(--border-sand)',
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(StatRow, {
    items: [{
      value: '6 ans',
      label: "d'existence"
    }, {
      value: '267',
      label: 'campagnes diffusées'
    }, {
      value: '1 Md',
      label: "d'impressions"
    }, {
      value: '120+',
      label: 'enseignes clientes'
    }]
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Deux \xE9crans",
    title: "Le plein \xE9cran, sur le mobile et sur la t\xE9l\xE9vision.",
    lead: "Un m\xEAme ciblage g\xE9ographique, deux inventaires premium."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(ChannelCard, {
    icon: "smartphone",
    title: "Mobile in-app",
    description: "Interstitiel plein \xE9cran dans plus de 1 600 applications mobiles populaires.",
    meta: ['1 600+ apps', 'Leboncoin · Vinted · L\'Équipe', 'Plein écran'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconAfter: "arrow-right",
      onClick: () => go('offre')
    }, "Voir les formats mobile")
  }), /*#__PURE__*/React.createElement(ChannelCard, {
    icon: "tv-minimal",
    title: "TV connect\xE9e",
    description: "Grandes cha\xEEnes en replay et cha\xEEnes gratuites en streaming, sur le poste du salon.",
    meta: ['TF1 · W9 · M6', 'Replay &amp; FAST', 'Spot vidéo'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconAfter: "arrow-right",
      onClick: () => go('offre')
    }, "Voir les formats TV")
  }))), /*#__PURE__*/React.createElement(Section, {
    surface: "sand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(GeoRadius, {
    label: "800 m",
    sublabel: "Rayon param\xE9tr\xE9",
    radius: 0.5,
    surface: "white"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "G\xE9ociblage",
    title: "Au m\xE8tre pr\xE8s, autour de chacun de vos points de vente."
  }), /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: 'Vous désignez vos points de vente',
      description: 'Une adresse, une liste, ou tout votre parc de magasins.'
    }, {
      title: 'Nous traçons le rayon',
      description: 'De 500 m à 30 km. La zone suit votre réalité commerciale, pas un découpage administratif.'
    }, {
      title: 'La campagne se diffuse',
      description: 'Seuls les mobiles présents dans la zone voient votre publicité.'
    }]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    iconAfter: "arrow-right",
    onClick: () => go('geo')
  }, "Le d\xE9tail du ciblage"))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Elles nous font confiance"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    names: ['KFC', "McDonald's", 'Burger King', 'E.Leclerc', 'BMW', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne'],
    columns: 6
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginTop: 'var(--space-4)'
    }
  }, "Logos clients \xE0 fournir \u2014 les enseignes sont provisoirement rendues en typographie.")), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "On voit enfin quels magasins la campagne fait travailler.",
    author: "Pr\xE9nom Nom",
    role: "Directeur marketing",
    company: "Enseigne"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Le rayon colle \xE0 notre zone de chalandise r\xE9elle, pas \xE0 un code postal.",
    author: "Pr\xE9nom Nom",
    role: "Responsable r\xE9seau",
    company: "Enseigne",
    surface: "white"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "\xC9tude gratuite",
    title: "Dites-nous o\xF9 sont vos points de vente.",
    lead: "Nous vous montrons l'audience disponible dans chaque zone, sans engagement.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Demander une \xE9tude"), /*#__PURE__*/React.createElement(Button, {
      variant: "onSand",
      size: "lg",
      onClick: () => go('refs')
    }, "Voir nos r\xE9f\xE9rences"))
  }))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Offre.jsx
try { (() => {
function Offre({
  go
}) {
  const [format, setFormat] = React.useState('Interstitiel');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos inventaires",
    title: "Deux \xE9crans, un seul ciblage.",
    lead: "L'attention est plein \xE9cran dans les deux cas : pas de banni\xE8re, pas de format subi."
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "default",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "Mobile in-app")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "Plus de 1 600 applications mobiles populaires : petites annonces, seconde main, presse, sport, m\xE9t\xE9o, jeux."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, ['Leboncoin', 'Vinted', "L'Équipe", '+ 1 600 apps'].map(a => /*#__PURE__*/React.createElement(Badge, {
    key: a,
    tone: "sand"
  }, a))), /*#__PURE__*/React.createElement(VisualSlot, {
    label: "Maquette d'interstitiel mobile \xE0 fournir \u2014 9:16",
    ratio: "9 / 16",
    style: {
      maxWidth: 220
    }
  }), /*#__PURE__*/React.createElement(PillTabs, {
    items: ['Interstitiel', 'Vidéo', 'Rich media'],
    value: format,
    onChange: setFormat
  }))), /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-400)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tv-minimal",
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-on-ink)'
    }
  }, "TV connect\xE9e")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "Replay des grandes cha\xEEnes et cha\xEEnes gratuites en streaming, sur le t\xE9l\xE9viseur du salon \u2014 avec le m\xEAme rayon de diffusion que le mobile."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, ['TF1', 'W9', 'M6', 'Replay', 'FAST'].map(a => /*#__PURE__*/React.createElement(Badge, {
    key: a,
    tone: "onInk"
  }, a))), /*#__PURE__*/React.createElement(VisualSlot, {
    label: "Visuel de spot TV connect\xE9e \xE0 fournir \u2014 16:9",
    style: {
      background: 'var(--surface-ink-soft)',
      borderColor: 'var(--border-on-ink)',
      color: 'var(--text-on-ink-muted)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconAfter: "arrow-right",
    onClick: () => go('contact')
  }, "R\xE9server un cr\xE9neau TV")))))), /*#__PURE__*/React.createElement(Section, {
    surface: "sand",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Ce qui est inclus",
    title: "Une campagne cl\xE9 en main.",
    align: "center",
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)'
    }
  }, [['crosshair', 'Plan de zones', 'Un rayon par point de vente, arbitré avec vous.'], ['clapperboard', 'Adaptation créative', 'Vos visuels déclinés aux formats mobile et TV.'], ['chart-no-axes-column', 'Reporting par zone', 'Impressions, couverture et répétition, magasin par magasin.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    surface: "default",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h5)',
      marginTop: 'var(--space-4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, d))))));
}
Object.assign(window, {
  Offre
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Offre.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/References.jsx
try { (() => {
const SECTEURS = {
  'Tous': ['KFC', "McDonald's", 'Burger King', 'E.Leclerc', 'BMW', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne'],
  'Restauration': ['KFC', "McDonald's", 'Burger King', 'Enseigne', 'Enseigne', 'Enseigne'],
  'Distribution': ['E.Leclerc', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne'],
  'Automobile': ['BMW', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne', 'Enseigne']
};
function References({
  go
}) {
  const [s, setS] = React.useState('Tous');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "R\xE9f\xE9rences",
    title: "120 enseignes ont d\xE9j\xE0 trac\xE9 leur zone avec nous.",
    lead: "Restauration rapide, distribution alimentaire, automobile, immobilier : partout o\xF9 le chiffre d'affaires se fait \xE0 quelques kilom\xE8tres du client."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PillTabs, {
    items: Object.keys(SECTEURS),
    value: s,
    onChange: setS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    names: SECTEURS[s],
    columns: 6
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-subtle)',
      marginTop: 'var(--space-4)'
    }
  }, "Logos clients \xE0 fournir \u2014 rendus provisoirement en typographie.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-ink)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "onInk",
    eyebrow: "Six ans de diffusion",
    title: "Ce que 267 campagnes nous ont appris."
  }), /*#__PURE__*/React.createElement(StatRow, {
    tone: "onInk",
    items: [{
      value: '267',
      label: 'campagnes'
    }, {
      value: '1 Md',
      label: "d'impressions"
    }, {
      value: '120+',
      label: 'enseignes'
    }]
  })), /*#__PURE__*/React.createElement(Testimonial, {
    surface: "ink",
    quote: "Le rayon colle \xE0 notre zone de chalandise r\xE9elle, pas \xE0 un code postal.",
    author: "Pr\xE9nom Nom",
    role: "Responsable r\xE9seau",
    company: "Enseigne"
  })))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, [['Restauration rapide', '42 points de vente', '3 km'], ['Distribution alimentaire', '18 hypermarchés', '10 km'], ['Concession automobile', '6 sites', '30 km']].map(([t, n, r]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    surface: "sand",
    pad: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cas client"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "target"
  }, r)), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h4)',
      marginTop: 'var(--space-4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, n, " couverts sur une campagne de six semaines."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconAfter: "arrow-right"
  }, "Lire le cas")))))));
}
Object.assign(window, {
  References
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/References.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/shell.jsx
try { (() => {
/* Helpers de mise en page partagés + exposition des composants du design system
   sur window, pour que chaque écran y accède comme à des globales. */
const NS = window.AdmovaDesignSystem_adee6e;
const ASSETS = '../../assets';
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--container-gutter)',
    ...style
  }
}, children);
const Section = ({
  children,
  surface,
  tight,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: surface === 'sand' ? 'var(--surface-sand-soft)' : surface === 'ink' ? 'var(--surface-ink)' : 'var(--surface-canvas)',
    padding: `${tight ? 'var(--section-y-tight)' : 'var(--section-y)'} 0`,
    ...style
  }
}, /*#__PURE__*/React.createElement(Container, null, children));
const VisualSlot = ({
  label,
  ratio = '16 / 9',
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: ratio,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--surface-sand)',
    border: '1px dashed var(--border-strong)',
    display: 'grid',
    placeItems: 'center',
    color: 'var(--text-subtle)',
    font: 'var(--type-caption)',
    textAlign: 'center',
    padding: 'var(--space-6)',
    ...style
  }
}, label);
Object.assign(window, NS, {
  Container,
  Section,
  VisualSlot,
  ASSETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GeoRadius = __ds_scope.GeoRadius;

__ds_ns.SignalBand = __ds_scope.SignalBand;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ChannelCard = __ds_scope.ChannelCard;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
