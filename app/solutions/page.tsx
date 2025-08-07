'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Users, DollarSign, BarChart3, Clock, Shield, Smartphone, Globe, MessageSquare, Calendar } from 'lucide-react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const solutions = [
  {
    id: 'lead-followup',
    title: 'Smart Lead Follow-Up',
    icon: MessageSquare,
    description: 'Never miss another trial signup. Automated sequences nurture leads until they convert.',
    longDescription: 'Transform your lead conversion with intelligent follow-up sequences that engage prospects at the perfect moment with personalized messaging.',
    features: [
      'Automated email and SMS sequences',
      'Lead scoring and prioritization',
      'Personalized messaging based on behavior',
      'Integration with CRM systems',
      'A/B testing for optimal conversion',
      'Real-time lead notifications'
    ],
    benefits: [
      'Increase lead conversion by 40%',
      'Save 15+ hours per week on follow-ups',
      'Never miss a hot prospect again',
      'Consistent messaging across all channels'
    ],
    integrations: ['Salesforce', 'HubSpot', 'Mailchimp', 'Twilio', 'Zapier'],
    pricing: 'Starting at $297/month'
  },
  {
    id: 'retention-radar',
    title: 'Member Retention Radar',
    icon: Users,
    description: 'Spot at-risk members before they even think about canceling.',
    longDescription: 'Predict member churn before it happens with AI-powered analytics and automatically deploy retention campaigns that keep your members active and loyal.',
    features: [
      'Churn prediction algorithms',
      'At-risk member identification',
      'Automated retention campaigns',
      'Member engagement tracking',
      'Personalized workout recommendations',
      'Win-back email sequences'
    ],
    benefits: [
      'Reduce churn by 35%',
      'Identify at-risk members 30 days early',
      'Increase member lifetime value',
      'Improve member satisfaction scores'
    ],
    integrations: ['Mindbody', 'ClubReady', 'Zen Planner', 'Glofox', 'TeamUp'],
    pricing: 'Starting at $397/month'
  },
  {
    id: 'payment-recovery',
    title: 'Payment Recovery System',
    icon: DollarSign,
    description: 'Failed payments get resolved automatically with smart retry logic.',
    longDescription: 'Recover failed payments automatically with intelligent retry logic and personalized outreach that maintains member relationships.',
    features: [
      'Smart payment retry logic',
      'Automated dunning sequences',
      'Payment method updating',
      'Decline reason analysis',
      'Member communication automation',
      'Revenue recovery tracking'
    ],
    benefits: [
      'Recover 85% of failed payments',
      'Reduce involuntary churn',
      'Save 20+ hours on payment issues',
      'Maintain positive member relationships'
    ],
    integrations: ['Stripe', 'PayPal', 'Square', 'Recurly', 'Chargebee'],
    pricing: 'Starting at $197/month'
  },
  {
    id: 'operations-dashboard',
    title: 'Operations Dashboard',
    icon: BarChart3,
    description: 'All your metrics in one place. No more spreadsheet juggling.',
    longDescription: 'Get complete visibility into your gym operations with automated reports, KPI tracking, and actionable insights delivered daily.',
    features: [
      'Real-time KPI monitoring',
      'Automated daily/weekly reports',
      'Member analytics and trends',
      'Revenue forecasting',
      'Staff performance metrics',
      'Custom dashboard creation'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify growth opportunities',
      'Track ROI on marketing spend',
      'Optimize staff scheduling'
    ],
    integrations: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'Tableau', 'Power BI'],
    pricing: 'Starting at $297/month'
  },
  {
    id: 'class-optimizer',
    title: 'Smart Class Optimizer',
    icon: Calendar,
    description: 'Fill classes based on member preferences and historical patterns.',
    longDescription: 'Optimize your class schedule based on member preferences, attendance patterns, and instructor availability to maximize utilization.',
    features: [
      'Attendance pattern analysis',
      'Automated scheduling suggestions',
      'Member preference tracking',
      'Waitlist management',
      'Instructor optimization',
      'Capacity forecasting'
    ],
    benefits: [
      'Increase class utilization by 30%',
      'Reduce no-shows and cancellations',
      'Optimize instructor schedules',
      'Improve member satisfaction'
    ],
    integrations: ['Mindbody', 'ClassPass', 'WODIFY', 'Zen Planner', 'Pike13'],
    pricing: 'Starting at $197/month'
  },
  {
    id: 'equipment-maintenance',
    title: 'Equipment Maintenance Tracker',
    icon: Shield,
    description: 'Prevent breakdowns with automated maintenance scheduling.',
    longDescription: 'Keep your equipment running smoothly with predictive maintenance scheduling, automated service reminders, and comprehensive equipment tracking.',
    features: [
      'Predictive maintenance alerts',
      'Automated service scheduling',
      'Equipment usage tracking',
      'Maintenance history logs',
      'Vendor management system',
      'Cost optimization analysis'
    ],
    benefits: [
      'Zero equipment downtime',
      'Reduce maintenance costs by 25%',
      'Extend equipment lifespan',
      'Improve member safety'
    ],
    integrations: ['ServiceTitan', 'UpKeep', 'Fiix', 'Maintenance Connection', 'FaciliWorks'],
    pricing: 'Starting at $147/month'
  },
  {
    id: 'member-messaging',
    title: 'Personalized Member Messaging',
    icon: MessageSquare,
    description: 'Send the right message at the right time to every member.',
    longDescription: 'Scale personal communication with intelligent messaging that adapts to each member\'s preferences, behavior, and fitness journey.',
    features: [
      'Behavioral message triggers',
      'Personalized content creation',
      'Multi-channel delivery (SMS, email, app)',
      'Message performance analytics',
      'Automated follow-up sequences',
      'Member preference management'
    ],
    benefits: [
      'Scale personal touch',
      'Increase member engagement by 45%',
      'Improve communication efficiency',
      'Boost class attendance rates'
    ],
    integrations: ['Twilio', 'SendGrid', 'Mailchimp', 'Intercom', 'OneSignal'],
    pricing: 'Starting at $197/month'
  },
  {
    id: 'revenue-intelligence',
    title: 'Revenue Intelligence',
    icon: DollarSign,
    description: 'Identify upsell opportunities and optimize pricing automatically.',
    longDescription: 'Maximize revenue per member with AI-powered insights that identify upsell opportunities, optimize pricing strategies, and predict revenue trends.',
    features: [
      'Upsell opportunity identification',
      'Dynamic pricing optimization',
      'Revenue forecasting',
      'Member value analysis',
      'Pricing experiment tracking',
      'Competitive pricing insights'
    ],
    benefits: [
      'Increase per-member value by 30%',
      'Optimize pricing strategies',
      'Identify revenue opportunities',
      'Predict financial performance'
    ],
    integrations: ['Stripe', 'QuickBooks', 'Xero', 'FreshBooks', 'Sage'],
    pricing: 'Starting at $347/month'
  },
  {
    id: 'staff-automation',
    title: 'Staff Workflow Automation',
    icon: Clock,
    description: 'Eliminate repetitive tasks so your team can focus on members.',
    longDescription: 'Streamline staff operations with automated workflows, task management, and performance tracking that frees your team to focus on member experience.',
    features: [
      'Automated task assignment',
      'Staff performance tracking',
      'Shift scheduling optimization',
      'Training progress monitoring',
      'Communication automation',
      'Productivity analytics'
    ],
    benefits: [
      'Boost team productivity by 40%',
      'Reduce administrative overhead',
      'Improve staff satisfaction',
      'Enhance member service quality'
    ],
    integrations: ['When I Work', 'Deputy', 'Humanity', 'Shiftboard', 'TSheets'],
    pricing: 'Starting at $247/month'
  },
  {
    id: 'competitive-analytics',
    title: 'Competitive Analytics',
    icon: BarChart3,
    description: 'Track your performance against market benchmarks.',
    longDescription: 'Stay ahead of the competition with comprehensive market analysis, competitor tracking, and performance benchmarking tailored to your local market.',
    features: [
      'Local market analysis',
      'Competitor pricing tracking',
      'Performance benchmarking',
      'Market trend identification',
      'Opportunity gap analysis',
      'Strategic recommendations'
    ],
    benefits: [
      'Stay ahead of competition',
      'Identify market opportunities',
      'Optimize competitive positioning',
      'Make strategic decisions'
    ],
    integrations: ['SEMrush', 'Ahrefs', 'SimilarWeb', 'BrightLocal', 'Moz'],
    pricing: 'Starting at $297/month'
  }
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Back to Home Button */}
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 transition-colors duration-200 mb-8"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
            style={{ 
              textDecoration: 'none', 
              display: 'inline-block',
              color: '#1840BA',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.a>
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                AUTOMATION SOLUTIONS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Complete Gym Automation Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your gym operations with our comprehensive suite of automation solutions. 
                Increase revenue, improve member retention, and save 20+ hours per week.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/book-call"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explore Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              10 Systems That Run Your Gym on Autopilot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each system integrates with your existing software and starts working in days, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a
                    href={`#${solution.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(solution.id);
                      if (element) {
                        const offset = 80; // Account for fixed navigation
                        const elementPosition = element.offsetTop - offset;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      {solutions.map((solution, index) => (
        <section key={solution.id} id={solution.id} className={`py-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
                  <solution.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{solution.longDescription}</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <div className="space-y-4 mb-8">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <Zap className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.integrations.map((integration, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>


            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Gym Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free strategy call to see how our automation solutions can transform your gym business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-call"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/testimonials"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                See Success Stories
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
