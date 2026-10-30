import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const STAGES = ['Long video in', 'WhisperX transcribes', 'LLM picks moments', 'Validation checks every pick', 'FFmpeg cuts clips']
const SEGS = [
  { t: '00:12 – 00:41', ok: true },
  { t: '00:12 – 00:41', ok: false, why: 'Duplicate removed' },
  { t: '03:05 – 03:32', ok: true },
  { t: '58:10 – 58:44', ok: false, why: 'Outside the video, rejected' },
  { t: '07:48 – 08:20', ok: true },
]
const kept = SEGS.filter(s => s.ok).length
const SUMMARY = `${SEGS.length - kept} bad picks caught. ${kept} clean clips cut.`

// Animated walk-through of the Dark Phoenix pipeline catching bad LLM output.
export default function Pipeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const [stage, setStage] = useState(-1)
  const [shown, setShown] = useState(0)
  const [checked, setChecked] = useState(0)
  const [msg, setMsg] = useState('Waiting for the model…')
  const timers = useRef([])

  const run = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (reduce) { setStage(5); setShown(SEGS.length); setChecked(SEGS.length); setMsg(SUMMARY); return }
    setStage(-1); setShown(0); setChecked(0); setMsg('Waiting for the model…')
    const at = (ms, fn) => timers.current.push(setTimeout(fn, ms))
    let t = 300
    at(t, () => { setStage(0); setMsg('Video received.') }); t += 900
    at(t, () => { setStage(1); setMsg('Transcribing the audio…') }); t += 1100
    at(t, () => { setStage(2); setMsg('The LLM suggests 5 moments.') }); t += 500
    SEGS.forEach((_, i) => at(t + i * 260, () => setShown(i + 1)))
    t += SEGS.length * 260 + 700
    at(t, () => { setStage(3); setMsg('Checking each pick against the transcript…') }); t += 600
    SEGS.forEach((_, i) => at(t + i * 420, () => setChecked(i + 1)))
    t += SEGS.length * 420 + 400
    at(t, () => { setStage(4); setMsg(SUMMARY) }); t += 900
    at(t, () => setStage(5))
  }, [reduce])

  useEffect(() => { if (inView) run() }, [inView, run])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  return (
    <figure className="pipeline" ref={ref} aria-labelledby="pipe-cap">
      <figcaption id="pipe-cap">
        <strong>How Dark Phoenix turns a long video into clips</strong>
        <span>The step that matters most is the one most AI apps skip.</span>
      </figcaption>
      <button className="replay" type="button" onClick={run}>Replay</button>
      <ol className="stages">
        {STAGES.map((s, i) => (
          <li key={s} className={[i === 3 ? 'key' : '', i === stage ? 'on' : '', i < stage ? 'done' : ''].join(' ')}>
            <span className="dot" />{s}
          </li>
        ))}
      </ol>
      <div className="segments" aria-live="polite">
        {SEGS.map((s, i) => {
          const isChecked = i < checked
          const cls = ['seg', i < shown ? 'in' : '', isChecked ? (s.ok ? 'pass' : 'fail') : ''].join(' ')
          return (
            <div key={i} className={cls}>
              <span className="t">{s.t}</span>
              <span className="v">{isChecked ? (s.ok ? 'Passed' : s.why) : ''}</span>
            </div>
          )
        })}
      </div>
      <p className="result">{msg}</p>
    </figure>
  )
}
