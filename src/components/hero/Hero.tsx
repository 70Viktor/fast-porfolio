import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef, type FC } from 'react'

export const Hero: FC = () => {
  const scope = useRef<HTMLElement | null>(null)
  const title = useRef<HTMLHeadingElement | null>(null)
  const fullName = useRef<HTMLHeadingElement | null>(null)

  useGSAP(
    () => {
      if (!title.current || !fullName.current) return

      const lines = gsap.utils.toArray<HTMLElement>('span', title.current)

      const splits = lines.map((line) =>
        SplitText.create(line, { type: 'chars, lines', mask: 'lines' }),
      )

      const fullNameSplit = SplitText.create(fullName.current, {
        type: 'chars, lines',
        mask: 'lines',
      })

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

      tl.from(
        fullNameSplit.chars,
        {
          yPercent: 120,
          opacity: 0,
          stagger: {
            each: 0.025,
          },
        },
        '<+0.12',
      )

      return () => splits.forEach((split) => split.revert())
    },
    { scope },
  )

  return (
    <section ref={scope} className='min-h-screen px-[clamp(1rem,8vw,10rem)]'>
      <div className='min-h-screen flex flex-col justify-between py-10'>
        <h1
          ref={title}
          className='grid self-end text-[clamp(3.5rem,10vw,12rem)] leading-none font-semibold uppercase will-change-transform'
        >
          <span>Creative</span>
          <span>Frontend</span>
          <span>Developer</span>
        </h1>
        <h2
          ref={fullName}
          className='text-[clamp(2.5rem,6vw,10rem)] leading-none font-semibold will-change-transform'
        >
          Сиденко Виктор
        </h2>
      </div>
    </section>
  )
}
