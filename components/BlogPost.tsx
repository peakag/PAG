'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react'

interface BlogPostProps {
  title: string
  date: string
  readTime: string
  author: string
  summary: string
  children: React.ReactNode
  showBackButton?: boolean
}

export default function BlogPost({ 
  title, 
  date, 
  readTime, 
  author, 
  summary, 
  children,
  showBackButton = true 
}: BlogPostProps) {
  return (
    <article style={{ 
      background: '#FFFFFF', 
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Article Header */}
      <section style={{ 
        background: 'linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 100%)',
        padding: '120px 0 80px 0' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          {showBackButton && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '32px' }}
            >
              <Link 
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#6B7280',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
              >
                ← Back to Blog
              </Link>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '48px',
              color: '#000000',
              fontWeight: 700,
              lineHeight: '1.1',
              marginBottom: '24px'
            }}
          >
            {title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              color: '#6B7280',
              fontSize: '16px',
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} />
              {date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} />
              {readTime}
            </div>
            <div>By {author}</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: '20px',
              color: '#6B7280',
              lineHeight: '1.7',
              background: '#F7F7F7',
              padding: '32px',
              borderRadius: '8px',
              borderLeft: '4px solid #3B82F6'
            }}
          >
            {summary}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#000000'
            }}
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        padding: '80px 0',
        margin: '80px 0 0 0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Ready to Transform Your Gym's Retention?
          </h3>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            lineHeight: '1.7'
          }}>
            Get expert guidance on implementing data-driven retention systems that save members and increase revenue.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FFFFFF',
              color: '#3B82F6',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 600,
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F7F7F7'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get Expert Guidance
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </article>
  )
}

// Reusable components for blog content
export const HighlightStat = ({ number, description }: { number: string; description: string }) => (
  <div style={{
    background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
    color: '#FFFFFF',
    padding: '48px 32px',
    borderRadius: '12px',
    textAlign: 'center',
    margin: '48px 0',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.15)'
  }}>
    <div style={{
      fontSize: '64px',
      fontWeight: 700,
      marginBottom: '16px',
      lineHeight: '1'
    }}>
      {number}
    </div>
    <div style={{
      fontSize: '18px',
      opacity: 0.95,
      lineHeight: '1.5'
    }} dangerouslySetInnerHTML={{ __html: description }} />
  </div>
)

export const DataGrid = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    margin: '48px 0'
  }}>
    {children}
  </div>
)

export const DataPoint = ({ number, label }: { number: string; label: string }) => (
  <div style={{
    textAlign: 'center',
    padding: '32px 24px',
    background: '#FFFFFF',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px)'
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
  }}>
    <div style={{
      fontSize: '36px',
      fontWeight: 700,
      color: '#3B82F6',
      marginBottom: '8px',
      lineHeight: '1'
    }}>
      {number}
    </div>
    <div style={{
      fontSize: '14px',
      color: '#6B7280',
      fontWeight: 500
    }}>
      {label}
    </div>
  </div>
)

export const ProblemStatement = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    background: '#FEF2F2',
    borderLeft: '4px solid #EF4444',
    padding: '24px',
    margin: '32px 0',
    borderRadius: '0 8px 8px 0'
  }}>
    <h4 style={{
      color: '#DC2626',
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '12px'
    }}>
      {title}
    </h4>
    <div style={{ color: '#374151', lineHeight: '1.7' }}>
      {children}
    </div>
  </div>
)

export const KeyInsight = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    background: '#F0FDF4',
    borderLeft: '4px solid #10B981',
    padding: '24px',
    margin: '32px 0',
    borderRadius: '0 8px 8px 0'
  }}>
    <h4 style={{
      color: '#059669',
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '12px'
    }}>
      {title}
    </h4>
    <div style={{ color: '#374151', lineHeight: '1.7' }}>
      {children}
    </div>
  </div>
)

export const QuoteBox = ({ children, author }: { children: React.ReactNode; author?: string }) => (
  <div style={{
    background: '#FFFBEB',
    borderLeft: '4px solid #F59E0B',
    padding: '24px',
    margin: '32px 0',
    borderRadius: '0 8px 8px 0',
    fontStyle: 'italic',
    position: 'relative'
  }}>
    <div style={{
      fontSize: '48px',
      color: '#F59E0B',
      position: 'absolute',
      top: '-8px',
      left: '24px',
      opacity: 0.3,
      lineHeight: '1'
    }}>
      "
    </div>
    <div style={{ 
      color: '#374151', 
      lineHeight: '1.7',
      paddingTop: '16px'
    }}>
      {children}
      {author && (
        <div style={{ 
          marginTop: '16px', 
          fontWeight: 600, 
          color: '#F59E0B' 
        }}>
          — {author}
        </div>
      )}
    </div>
  </div>
)

export const DataBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    background: '#F7F7F7',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '32px',
    margin: '32px 0'
  }}>
    <h4 style={{
      color: '#000000',
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '16px'
    }}>
      {title}
    </h4>
    <div style={{ color: '#374151', lineHeight: '1.7' }}>
      {children}
    </div>
  </div>
)
