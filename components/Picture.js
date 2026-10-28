// Images are pre-sized WebP files in /public/images (Next image optimization is
// disabled), so srcSet is built from the widths generated for each photo.
// `mobile` swaps in a differently cropped file (usually portrait) on phones.
const srcSetOf = (image) => image.widths.map((w) => `${image.base}-${w}.webp ${w}w`).join(", ");

export default function Picture({ image, mobile, sizes, priority = false, className, alt, ...rest }) {
  const fallback = `${image.base}-${image.widths[image.widths.length - 1]}.webp`;
  const img = (
    <img
      className={className}
      src={fallback}
      srcSet={srcSetOf(image)}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      {...rest}
    />
  );
  if (!mobile) return img;
  return (
    <picture>
      <source media="(max-width: 47.99em)" srcSet={srcSetOf(mobile)} sizes="100vw" width={mobile.width} height={mobile.height} />
      {img}
    </picture>
  );
}
