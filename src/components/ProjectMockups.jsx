import React from "react";

export function EdprowiseMockup() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 sm:p-6 text-white font-sans shadow-xl border border-slate-800">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            EP
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tracking-tight text-white">EDPROWISE HRM</span>
              <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Production
              </span>
            </div>
            <span className="text-[10px] text-slate-400">Employee Management & ERP Portal</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-700/50">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live API Connected</span>
        </div>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 text-xs">
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition">
          <span className="text-[10px] text-slate-400 block font-medium">Monthly Attendance</span>
          <span className="text-sm font-bold text-white block mt-0.5">22 / 24 Days</span>
          <span className="text-[10px] text-emerald-400 font-semibold">92% Present</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition">
          <span className="text-[10px] text-slate-400 block font-medium">Leave Balance</span>
          <span className="text-sm font-bold text-white block mt-0.5">14 Days</span>
          <span className="text-[10px] text-sky-400 font-semibold">Casual & Medical</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition">
          <span className="text-[10px] text-slate-400 block font-medium">Payroll Status</span>
          <span className="text-sm font-bold text-white block mt-0.5">Disbursed</span>
          <span className="text-[10px] text-indigo-400 font-semibold">Payslip Ready</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition">
          <span className="text-[10px] text-slate-400 block font-medium">LMS Modules</span>
          <span className="text-sm font-bold text-white block mt-0.5">6 Courses</span>
          <span className="text-[10px] text-amber-400 font-semibold">Timetable Active</span>
        </div>
      </div>

      {/* Main Feature Highlight: Payslip & Attendance */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-bold text-slate-200">Interactive Salary Slip & IT Declaration</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono text-[10px]">
            REST API Synced
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-[11px]">
          <div>
            <span className="text-slate-500 block">Gross Earnings</span>
            <span className="font-mono font-bold text-slate-200">Verified</span>
          </div>
          <div>
            <span className="text-slate-500 block">Deductions & IT</span>
            <span className="font-mono font-bold text-slate-200">Calculated</span>
          </div>
          <div>
            <span className="text-slate-500 block">Net Credit</span>
            <span className="font-mono font-bold text-emerald-400">Direct Transfer</span>
          </div>
        </div>
      </div>

      {/* Device Adaptation Bar */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span>Adaptive Flutter Layout (Phones, Tablets & Foldables)</span>
        </span>
        <span className="text-slate-500 font-mono">Portrait / Landscape</span>
      </div>
    </div>
  );
}

export function NetGapMockup() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-4 sm:p-6 text-white font-sans shadow-xl border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center text-xs">
            NG
          </div>
          <div>
            <span className="text-xs font-extrabold tracking-tight text-white block">NetGap Mobile</span>
            <span className="text-[10px] text-slate-400">Founder & Mindset Community</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-500/30">
          Supabase + Gemini AI
        </span>
      </div>

      {/* Founder Post Preview */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-sky-500 text-[10px] font-bold flex items-center justify-center">
              D
            </div>
            <span className="text-xs font-bold text-slate-200">Darshan MP</span>
            <span className="text-[10px] text-slate-400">· 2h ago</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
            94% Mindset Match
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Building resilient mobile architectures: how decoupling UI from networking cut our crash rate by 80%...
        </p>
        <div className="flex items-center gap-4 pt-1 text-[11px] text-slate-400 font-medium">
          <span>❤️ 48 Likes</span>
          <span>💬 19 Founder Replies</span>
          <span>⚡ Real-time Synced</span>
        </div>
      </div>

      {/* Real-time messaging preview */}
      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/50 flex items-center justify-between text-xs">
        <span className="text-slate-300 text-[11px]">Real-Time Messaging Feed: 14 new peer insights</span>
        <span className="text-indigo-400 font-bold text-[10px]">Open Stream →</span>
      </div>
    </div>
  );
}

export function LipSyncMockup() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-4 sm:p-6 text-white font-sans shadow-xl border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-600 text-white font-black flex items-center justify-center text-xs">
            AI
          </div>
          <div>
            <span className="text-xs font-extrabold tracking-tight text-white block">LipSync Deepfake Detector</span>
            <span className="text-[10px] text-slate-400">Computer Vision & Audio Temporal Anomaly Model</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
          85% Verified Accuracy
        </span>
      </div>

      {/* Visual Pipeline */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block mb-1">Visual Stream (OpenCV / CNN)</span>
          <div className="h-14 rounded-lg bg-slate-800/80 flex items-center justify-center text-rose-400 font-mono text-[11px] border border-rose-500/30">
            [Lip Landmark Mesh: 68 Pts]
          </div>
          <span className="text-[9px] text-slate-500 block mt-1">Spatial Feature Vector</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block mb-1">Audio Stream (MFCC Spectrogram)</span>
          <div className="h-14 rounded-lg bg-slate-800/80 flex items-center justify-center text-sky-400 font-mono text-[11px] border border-sky-500/30">
            [Audio Phoneme Alignment]
          </div>
          <span className="text-[9px] text-slate-500 block mt-1">Temporal Sync Correlation</span>
        </div>
      </div>

      {/* Model Verdict Card */}
      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block">Classifier Architecture</span>
          <span className="font-bold text-slate-200">PyTorch CNN + Bidirectional LSTM</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-emerald-400 font-bold block">Temporal Consistency</span>
          <span className="text-slate-300 text-[11px]">Validated on Benchmark Sets</span>
        </div>
      </div>
    </div>
  );
}

export function FinanceTrackerMockup() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-4 sm:p-6 text-white font-sans shadow-xl border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-xs">
            $
          </div>
          <div>
            <span className="text-xs font-extrabold tracking-tight text-white block">Personal Finance Tracker</span>
            <span className="text-[10px] text-slate-400">Flutter · Firebase · SQLite Offline Sync</span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
          8+ Core Screens
        </span>
      </div>

      {/* Balance Card */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 block">Current Portfolio Balance</span>
          <span className="text-xl font-extrabold font-mono text-white">$4,850.00</span>
        </div>
        <div className="text-right">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
            +18.4% This Month
          </span>
          <span className="text-[10px] text-slate-400 block mt-1">SQLite Local Cached</span>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2 text-xs">
        <div className="flex justify-between text-[11px] text-slate-400">
          <span>Budget Target Allocated</span>
          <span className="text-slate-200 font-mono">74%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div className="w-[74%] h-full bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function WorkoutTrackerMockup() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/70 p-4 sm:p-6 text-white font-sans shadow-xl border border-slate-800">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-xs shadow-xs">
            WT
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tracking-tight text-white">WORKOUT TRACKER</span>
              <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                0ms Local-First
              </span>
            </div>
            <span className="text-[10px] text-slate-400">Hybrid Flutter & Supabase Fitness Architecture</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-800/60 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>RLS Synced</span>
        </div>
      </div>

      {/* Crash-Proof Active Workout Recovery Banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border border-amber-500/40 mb-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-amber-300">Active Workout Recovered</span>
              <span className="px-1.5 py-0.2 text-[9px] font-mono rounded bg-amber-500/20 text-amber-200">15s Heartbeat Auto-Save</span>
            </div>
            <span className="text-[11px] text-slate-300">Push Day: Chest & Triceps • Elapsed: <strong className="text-white font-mono">42:15</strong></span>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-500 text-slate-950 shrink-0">
          Resume ↗
        </span>
      </div>

      {/* Unified Exercise Node with Choice-Based Equipment Selector */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white">Flat Bench Press</span>
            <span className="text-[10px] text-slate-400">· Chest & Anterior Delts</span>
          </div>
          {/* Equipment choice chips */}
          <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">Barbell</span>
            <span className="px-2 py-0.5 text-slate-400 hover:text-white transition">Dumbbell</span>
            <span className="px-2 py-0.5 text-slate-400 hover:text-white transition">Smith</span>
          </div>
        </div>

        {/* Set Rows */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
            <span className="text-slate-400">Set 1: <strong className="text-white font-mono">100 kg × 8</strong></span>
            <span className="text-emerald-400 font-bold">✓ 0ms Cached</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
            <span className="text-slate-400">Set 2: <strong className="text-white font-mono">102.5 kg × 6</strong></span>
            <span className="text-emerald-400 font-bold">✓ Progressive</span>
          </div>
        </div>
      </div>

      {/* 2-Column Vault & Nutrition Highlights */}
      <div className="grid grid-cols-2 gap-3 text-xs mb-3">
        {/* Private Visual Vault */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Private Visual Vault</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 font-mono">HMAC 60m TTL</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug mb-1">
            Zero-knowledge progress photo storage with Supabase RLS isolation.
          </p>
          <span className="text-[10px] text-slate-500 font-mono">No public S3 bucket exposure</span>
        </div>

        {/* Macro & Hydration Tracker */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Nutrition & Macros</span>
            <span className="text-[10px] font-mono font-bold text-white">2,450 kcal</span>
          </div>
          <div className="space-y-1 text-[10px] text-slate-300">
            <div className="flex justify-between"><span>Protein: 165g / 170g</span><span className="text-emerald-400 font-bold">97%</span></div>
            <div className="flex justify-between"><span>Daily Hydration: 2.8L</span><span className="text-sky-400 font-bold">Optimal</span></div>
          </div>
          <span className="text-[10px] text-slate-500 font-mono mt-1">25+ 1-tap food presets</span>
        </div>
      </div>

      {/* Multi-Form-Factor Hardware Badge */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/70">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Foldable & Flip Hardware Ready (Galaxy Z Fold / Z Flip)</span>
        </span>
        <span className="text-slate-500 font-mono text-[10px]">CLS = 0 (10 Shimmer Skeletons)</span>
      </div>
    </div>
  );
}
