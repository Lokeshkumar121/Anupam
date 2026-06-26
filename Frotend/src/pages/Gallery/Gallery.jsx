import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Heart, Share2 } from 'lucide-react';

// 20 dental images
const IMAGES = [
  { id: 1,  src: "/Img/i.jpg", title: "Professional Consultation",  category: "Consultation" },
  { id: 2,  src: "/Img/I2.avif", title: "Teeth Cleaning",             category: "Cleaning"      },
  { id: 3,  src: "/Img/I3.jpg", title: "Dental X-Ray",               category: "Diagnosis"     },
  { id: 4,  src: "/Img/I4.jpg", title: "Smile Makeover",             category: "Cosmetic"      },
  { id: 5,  src: "/Img/I10.jpg", title: "Dental Implants",            category: "Surgery"       },
  { id: 6,  src: "/Img/I6.jpg", title: "Orthodontics",               category: "Braces"        },
  { id: 7,  src: "/Img/I7.jpg", title: "Teeth Whitening",            category: "Cosmetic"      },
  { id: 8,  src: "/Img/I8.jpg", title: "Root Canal Treatment",       category: "Treatment"     },
  { id: 9,  src: "/Img/I9.jpg", title: "Comprehensive Exam",  category: "Examination"   },
  { id: 10, src: "/Img/I1.webp", title: "Quality Treatment",   category: "Treatment"     },
  { id: 11, src: "/Img/I11.jpg", title: "Cavity Filling",      category: "Treatment"     },
  { id: 12, src: "/Img/I12.jpg", title: "Gum Treatment",       category: "Periodontics"  },
  { id: 13, src: "/Img/I13.jpg", title: "Tooth Extraction",    category: "Surgery"       },
  { id: 14, src: "/Img/I14.jpg", title: "Dental Veneers",      category: "Cosmetic"      },
  { id: 15, src: "/Img/I15.jpg", title: "Crown Placement",      category: "Restorative"   },
  { id: 16, src: "/Img/I16.jpg", title: "Pediatric Dentistry", category: "Kids"          },
  { id: 17, src: "/Img/I17.jpg",      title: "Emergency Care",      category: "Emergency"     },
  { id: 18, src: "/Img/I18.jpg",      title: "Preventive Care",     category: "Prevention"    },
  { id: 19, src: "/Img/I19.jpg",       title: "Night Guard",         category: "Protection"    },
  { id: 20, src: "/Img/I20.jpg",       title: "Smile Design",        category: "Cosmetic"      },
];

const CATEGORIES = ['All', ...Array.from(new Set(IMAGES.map(i => i.category)))];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

  .gl-root {
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 56px 40px;
    background: #f8f8fc;
  }

  /* ---- header ---- */
  .gl-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .gl-header-left {}
  .gl-eyebrow {
    font-size: 11px; font-weight: 600;
    letter-spacing: 3px; text-transform: uppercase;
    color: #4848aa; margin-bottom: 8px;
    display: flex; align-items: center; gap: 8px;
  }
  .gl-eyebrow::before {
    content:''; display:inline-block;
    width:24px; height:2px;
    background:#4848aa; border-radius:2px;
  }
  .gl-title {
    font-size: clamp(26px, 3vw, 38px);
    font-weight: 700; color: #111148;
    letter-spacing: -1px; margin: 0;
  }
  .gl-count {
    font-size: 13px; font-weight: 500; color: #888;
    background: #fff;
    border: 1px solid #e8e8f4;
    border-radius: 30px;
    padding: 6px 16px;
  }

  /* ---- filter tabs ---- */
  .gl-filters {
    display: flex; flex-wrap: wrap; gap: 8px;
    margin-bottom: 32px;
  }
  .gl-filter-btn {
    padding: 7px 18px;
    border-radius: 30px;
    border: 1.5px solid #e0e0f0;
    background: #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12.5px; font-weight: 600;
    color: #555; cursor: pointer;
    transition: all 0.2s;
  }
  .gl-filter-btn:hover { border-color: #4848aa; color: #4848aa; }
  .gl-filter-btn.active {
    background: #111148; color: #fff;
    border-color: #111148;
  }

  /* ============================================
     ALL CARDS SAME RECTANGULAR SIZE
     ============================================ */
  .gl-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  /* ALL cards - same rectangular size */
  .gl-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background: #e0e0ec;
    cursor: pointer;
    aspect-ratio: 4/3;
    box-shadow: 0 2px 12px rgba(17,17,72,0.06);
    transition: transform 0.25s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.25s;
  }

  /* First card - SAME SIZE as others */
  .gl-card:first-child {
    aspect-ratio: 4/3;
  }

  .gl-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 32px rgba(17,17,72,0.14);
  }

  .gl-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
  }
  .gl-card:hover img { transform: scale(1.07); }

  /* hover overlay */
  .gl-overlay {
    position: absolute; inset:0;
    background: linear-gradient(to top,
      rgba(17,17,72,0.72) 0%,
      rgba(17,17,72,0.15) 55%,
      transparent 100%);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex; flex-direction: column;
    justify-content: flex-end;
    padding: 18px;
  }
  .gl-card:hover .gl-overlay { opacity: 1; }

  .gl-overlay-title {
    font-size: 14px; font-weight: 700; color: #fff;
    margin-bottom: 3px;
  }
  .gl-overlay-cat {
    font-size: 11px; font-weight: 500;
    color: rgba(255,255,255,0.65);
    text-transform: uppercase; letter-spacing: 1px;
  }
  .gl-zoom {
    position: absolute; top:14px; right:14px;
    width:34px; height:34px; border-radius:50%;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.2);
    display: flex; align-items:center; justify-content:center;
    opacity:0; transition: opacity 0.3s, transform 0.3s;
    transform: scale(0.8);
  }
  .gl-card:hover .gl-zoom { opacity:1; transform:scale(1); }

  /* Featured badge for first image */
  .gl-featured-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(135deg, #4848aa, #6c6cd4);
    color: #fff;
    padding: 5px 14px;
    border-radius: 20px;
    z-index: 1;
    box-shadow: 0 4px 12px rgba(72,72,170,0.3);
  }

  /* no results */
  .gl-empty {
    grid-column: 1/-1; text-align:center;
    padding: 60px 0; color:#999; font-size:15px;
  }

  /* ---- LIGHTBOX ---- */
  .gl-lb {
    position: fixed; inset:0;
    background: rgba(5,5,20,0.96);
    z-index: 9999;
    display:flex; align-items:center; justify-content:center;
    animation: lbIn 0.3s ease both;
  }
  @keyframes lbIn {
    from { opacity:0; }
    to   { opacity:1; }
  }

  .gl-lb-close {
    position:absolute; top:24px; right:24px;
    width:44px; height:44px; border-radius:50%;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    color:#fff; cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    transition: background 0.2s, transform 0.3s;
    z-index:2;
  }
  .gl-lb-close:hover { background:rgba(255,255,255,0.18); transform:rotate(90deg); }

  .gl-lb-nav {
    position:absolute; top:50%; transform:translateY(-50%);
    width:48px; height:48px; border-radius:50%;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1);
    color:#fff; cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    transition: background 0.2s, transform 0.2s;
    z-index:2;
  }
  .gl-lb-nav:hover { background:rgba(255,255,255,0.18); }
  .gl-lb-prev { left:24px; }
  .gl-lb-next { right:24px; }
  .gl-lb-prev:hover { transform:translateY(-50%) translateX(-2px); }
  .gl-lb-next:hover { transform:translateY(-50%) translateX(2px); }

  .gl-lb-body {
    display:flex; flex-direction:column; align-items:center;
    max-width: 88vw; max-height:90vh;
    animation: lbZoom 0.35s cubic-bezier(0.22,1,0.36,1) both;
  }
  @keyframes lbZoom {
    from { opacity:0; transform:scale(0.93) translateY(16px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }

  .gl-lb-img-wrap {
    border-radius:14px; overflow:hidden;
    max-height:65vh;
    box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  }
  .gl-lb-img-wrap img {
    display:block; max-width:88vw; max-height:65vh;
    object-fit:contain; background:#0a0a14;
  }

  .gl-lb-info {
    width:100%; display:flex;
    align-items:center; justify-content:space-between;
    padding:16px 4px 12px;
    flex-wrap:wrap; gap:12px;
  }
  .gl-lb-title { font-size:16px; font-weight:700; color:#fff; margin:0 0 2px; }
  .gl-lb-cat   { font-size:11px; color:rgba(255,255,255,0.45); text-transform:uppercase; letter-spacing:1px; }

  .gl-lb-actions { display:flex; align-items:center; gap:12px; }
  .gl-lb-btn {
    width:36px; height:36px; border-radius:50%;
    background:rgba(255,255,255,0.06);
    border:1px solid rgba(255,255,255,0.1);
    color:rgba(255,255,255,0.7); cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    transition:all 0.2s;
  }
  .gl-lb-btn:hover { background:rgba(255,255,255,0.14); color:#fff; }
  .gl-lb-btn.liked { color:#ef4444; }

  .gl-lb-counter {
    font-size:13px; font-weight:500;
    color:rgba(255,255,255,0.4);
    padding-left:12px;
    border-left:1px solid rgba(255,255,255,0.1);
  }

  /* thumbnail strip */
  .gl-lb-thumbs {
    display:flex; gap:8px;
    overflow-x:auto; padding:4px 0;
    scrollbar-width:thin;
    scrollbar-color:rgba(255,255,255,0.15) transparent;
  }
  .gl-lb-thumbs::-webkit-scrollbar { height:3px; }
  .gl-lb-thumbs::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.2); border-radius:2px; }

  .gl-lb-thumb {
    flex-shrink:0; width:66px; height:66px;
    border-radius:8px; overflow:hidden; cursor:pointer;
    border:2px solid transparent; opacity:0.35;
    transition:all 0.22s;
  }
  .gl-lb-thumb:hover { opacity:0.65; }
  .gl-lb-thumb.on { border-color:#4848aa; opacity:1; box-shadow:0 0 18px rgba(72,72,170,0.35); }
  .gl-lb-thumb img { width:100%; height:100%; object-fit:cover; }

  /* ============================================
     RESPONSIVE
     ============================================ */
  @media (max-width: 1024px) {
    .gl-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
  }

  @media (max-width: 768px) {
    .gl-root { padding: 40px 24px; }
    .gl-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    .gl-root { padding: 28px 16px; }
    .gl-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .gl-card {
      aspect-ratio: 4/3;
      border-radius: 12px;
    }
    .gl-title { font-size: 1.3rem; }
    .gl-lb-nav { width:38px; height:38px; }
    .gl-lb-prev { left:10px; } 
    .gl-lb-next { right:10px; }
    .gl-lb-thumb { width: 48px; height: 48px; }
    .gl-lb-img-wrap { max-height: 50vh; }
    .gl-lb-img-wrap img { max-height: 50vh; }
    .gl-overlay { padding: 12px; }
    .gl-overlay-title { font-size: 12px; }
    .gl-zoom { width: 28px; height: 28px; top: 10px; right: 10px; }
    .gl-zoom svg { width: 14px; height: 14px; }
    .gl-featured-badge { font-size: 8px; padding: 3px 10px; top: 10px; left: 10px; }
  }

  @media (max-width: 375px) {
    .gl-grid {
      gap: 8px;
    }
    .gl-card {
      aspect-ratio: 4/3;
      border-radius: 10px;
    }
  }
`;

const Gallery = ({ images = IMAGES, title = "Treatment Gallery" }) => {
  const [active, setActive] = useState('All');
  const [lb, setLb] = useState(null);
  const [liked, setLiked] = useState(false);

  const filtered = active === 'All' ? images : images.filter(i => i.category === active);

  const openLb = (idx) => { setLb(idx); document.body.style.overflow = 'hidden'; };
  const closeLb = () => { setLb(null); document.body.style.overflow = ''; };
  const prev = () => setLb(i => (i === 0 ? filtered.length - 1 : i - 1));
  const next = () => setLb(i => (i === filtered.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const fn = e => {
      if (lb === null) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [lb]);

  const cur = lb !== null ? filtered[lb] : null;

  return (
    <>
      <style>{styles}</style>
      <div className="gl-root">

        {/* header */}
        <div className="gl-header">
          <div className="gl-header-left">
            <p className="gl-eyebrow">Our Work</p>
            <h2 className="gl-title">{title}</h2>
          </div>
          <span className="gl-count">{filtered.length} Photos</span>
        </div>

        {/* filters */}
        

        {/* grid - ALL CARDS SAME SIZE */}
        <div className="gl-grid">
          {filtered.length === 0 && <div className="gl-empty">No images in this category.</div>}
          {filtered.map((img, idx) => (
            <div key={img.id} className="gl-card" onClick={() => openLb(idx)}>
              <img src={img.src} alt={img.title} loading="lazy" />
              {/* Featured badge on first image */}
              {idx === 0 && <span className="gl-featured-badge">★ Featured</span>}
              <div className="gl-overlay">
                <div className="gl-zoom">
                  <ZoomIn size={16} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {cur && (
          <div className="gl-lb" onClick={closeLb}>
            <button className="gl-lb-close" onClick={e => { e.stopPropagation(); closeLb(); }}>
              <X size={20} />
            </button>

            <button className="gl-lb-nav gl-lb-prev" onClick={e => { e.stopPropagation(); prev(); }}>
              <ChevronLeft size={24} />
            </button>

            <div className="gl-lb-body" onClick={e => e.stopPropagation()}>
              <div className="gl-lb-img-wrap">
                <img src={cur.src} alt={cur.title} />
              </div>

              <div className="gl-lb-info">
                <div>
                  <p className="gl-lb-title">{cur.title}</p>
                  <p className="gl-lb-cat">{cur.category}</p>
                </div>
                <div className="gl-lb-actions">
                  <button
                    className={`gl-lb-btn${liked ? ' liked' : ''}`}
                    onClick={() => setLiked(l => !l)}
                  >
                    <Heart size={16} fill={liked ? '#ef4444' : 'none'} stroke={liked ? '#ef4444' : 'currentColor'} />
                  </button>
                  <button className="gl-lb-btn"><Share2 size={16} /></button>
                  <span className="gl-lb-counter">{lb + 1} / {filtered.length}</span>
                </div>
              </div>

              <div className="gl-lb-thumbs">
                {filtered.map((img, idx) => (
                  <div
                    key={img.id}
                    className={`gl-lb-thumb${idx === lb ? ' on' : ''}`}
                    onClick={() => setLb(idx)}
                  >
                    <img src={img.src} alt={img.title} />
                  </div>
                ))}
              </div>
            </div>

            <button className="gl-lb-nav gl-lb-next" onClick={e => { e.stopPropagation(); next(); }}>
              <ChevronRight size={24} />
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default Gallery;