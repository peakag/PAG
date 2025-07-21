'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Users, DollarSign, AlertTriangle, Calendar, BarChart3, Smartphone, FileText } from 'lucide-react'

// Sparkline Chart Component
function SparklineChart({ data, color = "#10B981" }: { data: number[], color?: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x},${y}`
  }).join(' ')
  
  return (
    <svg width="100%" height="30" viewBox="0 0 100 30" style={{ marginTop: '8px' }}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
    </svg>
  )
}

// Heatmap Component
function ActivityHeatmap() {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '2px', marginTop: '12px' }}>
      {days.map((day, dayIndex) => (
        <div key={day} style={{ gridColumn: 'span 24', display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '2px' }}>
          {hours.map((hour) => {
            const intensity = Math.random() * 0.8 + 0.2
            return (
              <div
                key={hour}
                style={{
                  width: '8px',
                  height: '8px',
                  background: `rgba(139, 92, 246, ${intensity})`,
                  borderRadius: '1px'
                }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

// Line Chart Component
function RetentionTrendLine() {
  const data = [75, 78, 82, 79, 85, 87, 89, 91, 88, 90, 92, 94]
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - (value - 70) * 3.33 // Scale to fit 70-100 range
    return `${x},${y}`
  }).join(' ')
  
  const fillPoints = `${points} L100,100 L0,100 Z`
  
  return (
    <svg width="100%" height="80" viewBox="0 0 100 100" style={{ marginTop: '12px' }}>
      <defs>
        <linearGradient id="retentionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
        </linearGradient>
      </defs>
      <path
        d={`M ${fillPoints}`}
        fill="url(#retentionGradient)"
      />
      <polyline
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        points={points}
      />
    </svg>
  )
}

export default function Dashboard() {
  return (
    <section 
      id="dashboard" 
      className="bg-black relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4169E1'
            }}
          >
            DASHBOARD
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '48px',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            Real-Time Intelligence at Your Fingertips
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '64px'
            }}
          >
            Monitor your gym's performance with our powerful analytics dashboard
          </motion.p>
        </div>

        {/* Dashboard Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            perspective: '1500px'
          }}
        >
          {/* Dashboard Mockup */}
          <motion.div
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              transform: 'rotateX(5deg)',
              overflow: 'hidden'
            }}
            whileHover={{
              transform: 'rotateX(5deg) scale(1.02)',
              boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.7)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Dashboard Header */}
            <div
              style={{
                height: '60px',
                background: 'rgba(0, 0, 0, 0.5)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px'
              }}
            >
              <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '16px' }}>
                Peak Analytics
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                  Last 30 days
                </div>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(65, 105, 225, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4169E1',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  JD
                </div>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div
              style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px'
              }}
            >
              {/* Key Metrics Cards */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Users size={20} style={{ color: '#10B981' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    Member Retention Rate
                  </span>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  87.3%
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <TrendingUp size={16} style={{ color: '#10B981' }} />
                  <span style={{ color: '#10B981', fontSize: '14px', fontWeight: '500' }}>
                    +12.5% vs last month
                  </span>
                </div>
                <SparklineChart data={[75, 78, 82, 79, 85, 87, 89, 91, 88, 90, 92, 94]} color="#10B981" />
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <DollarSign size={20} style={{ color: '#10B981' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    Revenue Saved
                  </span>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  $24,580
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginBottom: '8px' }}>
                  This Month
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={16} style={{ color: '#10B981' }} />
                  <span style={{ color: '#10B981', fontSize: '14px', fontWeight: '500' }}>
                    +18.2% vs last month
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <AlertTriangle size={20} style={{ color: '#EF4444' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    At-Risk Members
                  </span>
                </div>
                <div style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  14
                </div>
                <div style={{ color: '#10B981', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Being Engaged
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.1)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ background: '#10B981', height: '100%', width: '65%' }} />
                </div>
              </div>

              {/* Chart Section */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '20px',
                  gridColumn: 'span 2'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <BarChart3 size={20} style={{ color: '#8B5CF6' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    Member Activity Heatmap
                  </span>
                </div>
                <ActivityHeatmap />
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <TrendingUp size={20} style={{ color: '#8B5CF6' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    Retention Trend
                  </span>
                </div>
                <RetentionTrendLine />
              </div>

              {/* Action Items Section */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '20px',
                  gridColumn: 'span 3'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Calendar size={20} style={{ color: '#4169E1' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    Recent Automated Actions
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { name: 'J*** S***', action: 'Re-engagement campaign sent', time: '2 min ago', status: 'success' },
                    { name: 'M*** L***', action: 'Personalized offer delivered', time: '5 min ago', status: 'success' },
                    { name: 'R*** K***', action: 'Check-in reminder sent', time: '8 min ago', status: 'pending' }
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '6px' }}>
                      <div>
                        <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '500' }}>
                          {item.name}
                        </div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px' }}>
                          {item.action}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px' }}>
                          {item.time}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: item.status === 'success' ? '#10B981' : '#F59E0B'
                            }}
                          />
                          <span style={{ color: item.status === 'success' ? '#10B981' : '#F59E0B', fontSize: '12px' }}>
                            {item.status === 'success' ? 'Completed' : 'Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(65, 105, 225, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <BarChart3 size={24} style={{ color: '#4169E1' }} />
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Real-Time Tracking
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
              Monitor member activity and retention metrics in real-time with instant updates
            </p>
          </div>

          <div className="text-center">
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(65, 105, 225, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <FileText size={24} style={{ color: '#4169E1' }} />
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Automated Reports
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
              Get detailed insights and performance reports delivered automatically
            </p>
          </div>

          <div className="text-center">
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(65, 105, 225, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <Smartphone size={24} style={{ color: '#4169E1' }} />
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Mobile Responsive
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
              Access your dashboard anywhere with our fully responsive mobile interface
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            style={{
              background: '#4169E1',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(65, 105, 225, 0.3)'
            }}
            whileHover={{
              boxShadow: '0 8px 30px rgba(65, 105, 225, 0.5)',
              transform: 'translateY(-2px)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Request Live Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 