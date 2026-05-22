import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef, type FC } from 'react'

export const Hero: FC = () => {
  const scope = useRef<HTMLElement | null>(null)
  const title = useRef<HTMLHeadingElement | null>(null)

  useGSAP(
    () => {
      if (!title.current) return

      const lines = gsap.utils.toArray<HTMLElement>('span', title.current)

      const splits = lines.map((line) =>
        SplitText.create(line, { type: 'chars, lines', mask: 'lines' }),
      )

      const tl = gsap.timeline({
        defaults: { duration: 1.2, ease: 'power4.out' },
      })

      splits.forEach((split, lineIndex) => {
        tl.from(
          split.chars,
          {
            yPercent: -120,
            opacity: 0,
            stagger: {
              each: 0.025,
              from: 'end',
            },
          },
          lineIndex * 0.12,
        )
      })

      return () => splits.forEach((split) => split.revert())
    },
    { scope },
  )

  return (
    <section ref={scope} className='min-h-screen px-[clamp(1rem,8vw,10rem)]'>
      <div className='flex min-h-screen items-center justify-end'>
        <h1
          ref={title}
          className='grid -translate-y-16 text-[clamp(4rem,10vw,12rem)] leading-none font-semibold uppercase will-change-transform'
        >
          <span>Creative</span>
          <span>Frontend</span>
          <span>Developer</span>
        </h1>
      </div>
    </section>
  )
}
