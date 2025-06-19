import './App.css'
import { Heart, Bot, Users, TrendingUp, DollarSign, Mail, Github, Twitter, MessageCircle, BookOpen, Send, RefreshCw } from 'lucide-react'
import { useState, useEffect } from 'react'

function App() {
  const [stats, setStats] = useState({
    prayers: 12847,
    content: 8392,
    community: 5621
  })

  const [verseOfDay, setVerseOfDay] = useState(null)
  const [verseLoading, setVerseLoading] = useState(false)
  const [prayerForm, setPrayerForm] = useState({
    name: '',
    intention: ''
  })
  const [prayerSubmitted, setPrayerSubmitted] = useState(false)

  // Fetch verse of the day
  const fetchVerseOfDay = async () => {
    setVerseLoading(true)
    try {
      const response = await fetch('https://beta.ourmanna.com/api/v1/get?format=json')
      const data = await response.json()
      setVerseOfDay(data.verse.details)
    } catch (error) {
      console.error('Error fetching verse:', error)
      // Fallback verse
      setVerseOfDay({
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
        reference: "Jeremiah 29:11",
        version: "NIV"
      })
    }
    setVerseLoading(false)
  }

  // Handle prayer form submission
  const handlePrayerSubmit = (e) => {
    e.preventDefault()
    if (prayerForm.name && prayerForm.intention) {
      setPrayerSubmitted(true)
      setTimeout(() => {
        setPrayerSubmitted(false)
        setPrayerForm({ name: '', intention: '' })
      }, 3000)
    }
  }

  // Animate counters on load
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        prayers: prev.prayers + Math.floor(Math.random() * 3),
        content: prev.content + Math.floor(Math.random() * 2),
        community: prev.community + Math.floor(Math.random() * 2)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Fetch verse on component mount
  useEffect(() => {
    fetchVerseOfDay()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">FaithAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#agents" className="text-gray-300 hover:text-purple-400 transition-colors">Agents</a>
              <a href="#stats" className="text-gray-300 hover:text-purple-400 transition-colors">Impact</a>
              <a href="#donate" className="text-gray-300 hover:text-purple-400 transition-colors">Support</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Faith Ministry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering believers worldwide through intelligent AI agents that create content, 
              foster community, and strengthen faith journeys.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Join the Movement
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* AI Agents Showcase */}
      <section id="agents" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Your AI
              <span className="block text-purple-400">Ministry Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three powerful AI agents working together to transform your spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Content Creator */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Content Creator</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generate inspiring sermons, devotionals, and social media content that resonates 
                  with your community and spreads the Gospel message effectively.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-purple-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Sermon outlines & scripts
                </div>
                <div className="flex items-center text-sm text-purple-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Daily devotionals
                </div>
                <div className="flex items-center text-sm text-purple-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Social media posts
                </div>
              </div>
            </div>

            {/* Prayer Partner */}
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Prayer Partner</h3>
                <p className="text-gray-300 leading-relaxed">
                  Provide personalized prayer support, spiritual guidance, and compassionate 
                  responses to help believers navigate life's challenges with faith.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Personal prayer requests
                </div>
                <div className="flex items-center text-sm text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Spiritual counseling
                </div>
                <div className="flex items-center text-sm text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Scripture recommendations
                </div>
              </div>
            </div>

            {/* Community Builder */}
            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Community Builder</h3>
                <p className="text-gray-300 leading-relaxed">
                  Foster meaningful connections, organize events, and create engaging 
                  experiences that bring believers together in fellowship.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-indigo-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Event planning
                </div>
                <div className="flex items-center text-sm text-indigo-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Discussion facilitation
                </div>
                <div className="flex items-center text-sm text-indigo-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Community outreach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verse of the Day Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-12 w-12 text-blue-400 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Verse of the Day
                </h2>
              </div>
              <p className="text-gray-300 text-lg">
                Find daily inspiration and guidance through God's word
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-blue-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
              {verseLoading ? (
                <div className="text-center">
                  <RefreshCw className="h-8 w-8 text-blue-400 mx-auto mb-4 animate-spin" />
                  <p className="text-gray-300">Loading today's verse...</p>
                </div>
              ) : verseOfDay ? (
                <div className="text-center">
                  <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                    "{verseOfDay.text}"
                  </blockquote>
                  <div className="text-blue-300 text-lg font-semibold">
                    — {verseOfDay.reference} ({verseOfDay.version})
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-300">
                  Unable to load verse. Please try again later.
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={fetchVerseOfDay}
                disabled={verseLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center mx-auto"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${verseLoading ? 'animate-spin' : ''}`} />
                Get New Verse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-12 w-12 text-purple-400 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Submit Prayer Request
                </h2>
              </div>
              <p className="text-gray-300 text-lg">
                Share your prayer intentions with our community of believers
              </p>
            </div>

            {prayerSubmitted ? (
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Prayer Received</h3>
                <p className="text-green-300 text-lg">
                  Thank you for sharing your heart with us. Your prayer has been received and will be lifted up by our community.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePrayerSubmit} className="space-y-6">
                <div className="bg-gradient-to-br from-white/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <label htmlFor="name" className="block text-white text-lg font-semibold mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={prayerForm.name}
                    onChange={(e) => setPrayerForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-800/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="bg-gradient-to-br from-white/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <label htmlFor="intention" className="block text-white text-lg font-semibold mb-3">
                    Prayer Intention
                  </label>
                  <textarea
                    id="intention"
                    value={prayerForm.intention}
                    onChange={(e) => setPrayerForm(prev => ({ ...prev, intention: e.target.value }))}
                    rows={4}
                    className="w-full bg-slate-800/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    placeholder="Share what you'd like us to pray for..."
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center mx-auto"
                  >
                    <Send className="h-5 w-5 mr-3" />
                    Submit Prayer Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Global Faith Stats */}
      <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Faith
              <span className="block text-purple-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how FaithAI is transforming lives and strengthening faith communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-slate-800/30 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <div className="mb-4">
                <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.prayers.toLocaleString()}
                </div>
                <div className="text-purple-300 text-lg font-semibold">Prayers Answered</div>
                <div className="text-gray-400 text-sm mt-2">This month</div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-slate-800/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
              <div className="mb-4">
                <Bot className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.content.toLocaleString()}
                </div>
                <div className="text-blue-300 text-lg font-semibold">Content Created</div>
                <div className="text-gray-400 text-sm mt-2">This month</div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-slate-800/30 to-indigo-900/20 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8">
              <div className="mb-4">
                <Users className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.community.toLocaleString()}
                </div>
                <div className="text-indigo-300 text-lg font-semibold">Lives Touched</div>
                <div className="text-gray-400 text-sm mt-2">This month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support Our
                <span className="block text-purple-400">Ministry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Help us continue spreading faith and building communities through AI-powered ministry tools
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Cash App */}
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cash App</h3>
                <p className="text-green-300 font-semibold">$FaithAI</p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Donate Now
                </button>
              </div>

              {/* Venmo */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Venmo</h3>
                <p className="text-blue-300 font-semibold">@FaithAI-Ministry</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Donate Now
                </button>
              </div>

              {/* Crypto */}
              <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-500/30 rounded-2xl p-6 text-center hover:border-orange-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Crypto</h3>
                <p className="text-orange-300 font-semibold">BTC, ETH, USDC</p>
                <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Get Address
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Your donations help us maintain and improve our AI ministry tools, reaching more believers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900/80 border-t border-purple-500/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">FaithAI</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering believers worldwide through intelligent AI agents that create content, 
                foster community, and strengthen faith journeys.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <MessageCircle className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#agents" className="text-gray-300 hover:text-purple-400 transition-colors">AI Agents</a></li>
                <li><a href="#stats" className="text-gray-300 hover:text-purple-400 transition-colors">Impact Stats</a></li>
                <li><a href="#donate" className="text-gray-300 hover:text-purple-400 transition-colors">Support Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <a href="mailto:hello@faithai.org" className="text-gray-300 hover:text-purple-400 transition-colors">
                    hello@faithai.org
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-purple-400" />
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    Join Discord Community
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 FaithAI. All rights reserved. Built with faith and AI.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

