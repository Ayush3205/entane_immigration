import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import { NEWS_BLOGS_TEXT_URL, parseNewsBlogs } from '../data/newsBlogs';

const isHeadingLine = (line) => (
  line === line.toUpperCase() &&
  line.length <= 105 &&
  !line.startsWith('-') &&
  !/[.!?]$/.test(line)
);

function BlogBody({ lines }) {
  const blocks = [];
  let bullets = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    blocks.push({ type: 'list', items: bullets });
    bullets = [];
  };

  lines.forEach((line) => {
    if (line.startsWith('-')) {
      bullets.push(line.replace(/^-+\s*/, ''));
      return;
    }

    flushBullets();

    if (line.startsWith('## ')) {
      blocks.push({ type: 'heading', text: line.replace(/^##\s+/, '') });
      return;
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'subheading', text: line.replace(/^###\s+/, '') });
      return;
    }

    if (/^\d+\.\s+/.test(line) || /:$/.test(line)) {
      blocks.push({ type: 'subheading', text: line });
      return;
    }

    if (isHeadingLine(line)) {
      blocks.push({ type: 'heading', text: line });
      return;
    }

    blocks.push({ type: 'paragraph', text: line });
  });

  flushBullets();

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'list') {
          return (
            <ul key={`list-${index}`} style={{ display: 'grid', gap: 12, paddingLeft: 0, margin: '0 0 26px', listStyle: 'none' }}>
              {block.items.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    padding: '12px 16px',
                    border: '1px solid rgba(0, 53, 43, 0.12)',
                    borderRadius: 8,
                    background: '#fffdf6',
                  }}
                >
                  <span style={{ color: '#FF3300', fontWeight: 700, lineHeight: 1.5 }}>+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === 'heading') {
          return (
            <h2
              key={`heading-${index}`}
              style={{
                color: '#00352B',
                fontSize: 'clamp(24px, 3vw, 34px)',
                lineHeight: 1.2,
                margin: '44px 0 18px',
              }}
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === 'subheading') {
          return (
            <h3
              key={`subheading-${index}`}
              style={{
                color: '#00352B',
                fontSize: 'clamp(19px, 2.2vw, 24px)',
                lineHeight: 1.25,
                margin: '30px 0 10px',
              }}
            >
              {block.text}
            </h3>
          );
        }

        return (
          <p key={`paragraph-${index}`} style={{ margin: '0 0 22px' }}>
            {block.text}
          </p>
        );
      })}
    </>
  );
}

function NewsBlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(NEWS_BLOGS_TEXT_URL)
      .then((response) => response.text())
      .then((text) => {
        if (!isMounted) return;
        const posts = parseNewsBlogs(text);
        setPost(posts.find((item) => item.slug === slug) || null);
        setIsLoading(false);
      })
      .catch(() => {
        if (isMounted) {
          setPost(null);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', minHeight: '100vh' }}>
        <Header />
        <main style={{ padding: '180px 24px 96px', textAlign: 'center' }}>
          <p style={{ color: '#667085', fontSize: 18 }}>Loading blog...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', minHeight: '100vh' }}>
        <Header />
        <main style={{ padding: '180px 24px 96px' }}>
          <section style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#FF3300', fontWeight: 600, marginBottom: 16 }}>Blog Not Found</p>
            <h1 style={{ color: '#00352B', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.12, margin: 0 }}>
              This blog is not available.
            </h1>
            <Link
              to="/news-blogs"
              style={{
                display: 'inline-flex',
                marginTop: 32,
                padding: '12px 22px',
                borderRadius: 10,
                background: '#FF3300',
                color: '#fff',
                fontWeight: 500,
              }}
            >
              Back to Blogs
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', minHeight: '100vh' }}>
      <Header />
      <main style={{ paddingTop: 120 }}>
        <section style={{ padding: '72px 24px 56px', background: '#fff' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <Link
              to="/news-blogs"
              style={{
                color: '#FF3300',
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 28,
                display: 'inline-flex',
              }}
            >
              Back to Blogs
            </Link>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 12px',
                background: '#FF3300',
                borderRadius: 16,
                color: '#FFFBE9',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 18,
              }}
            >
              {post.category}
            </div>
            <h1
              style={{
                color: '#00352B',
                fontSize: 'clamp(34px, 5vw, 58px)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                margin: '0 0 18px',
                maxWidth: 940,
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                color: '#667085',
                fontSize: 18,
                lineHeight: 1.7,
                margin: '0 0 24px',
                maxWidth: 860,
              }}
            >
              {post.description}
            </p>
            <div
              style={{
                borderTop: '1px solid rgba(0, 53, 43, 0.12)',
                color: '#667085',
                display: 'flex',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                gap: 12,
                lineHeight: '20px',
                paddingTop: 20,
              }}
            >
              <span>{post.author}</span>
              <span aria-hidden>-</span>
              <span>{post.date}</span>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 24px 88px' }}>
          <article
            style={{
              maxWidth: 960,
              margin: '0 auto',
              color: '#1f2933',
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            <BlogBody lines={post.content} />
          </article>
        </section>

        <EsanteBanner />
      </main>
      <Footer />
    </div>
  );
}

export default NewsBlogDetailPage;
