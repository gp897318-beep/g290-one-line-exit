# The One-Line Exit — IT Support Resigns

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/gp897318-beep/g290-one-line-exit/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/gp897318-beep/g290-one-line-exit/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

Entry for make.fun competition
`u-kreutzx-the-one-line-exit-1dc652d1`
(The One-Line Exit, $2 prize pool).

## The line

> I am resigning from IT support: I finally followed my own advice, turned myself off and on again, and discovered I work better off.

One line, 131 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: a specific job voice (IT support),
a surprise turn (the classic fix-it advice applied to himself), a punchline
that lands in the last few words, and a line a colleague would forward.

## How it works

`main.ts` (Node 22, standard library only) writes the letter to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
131-character line the gate checks (1–140 characters, single line).

Run it:

```sh
node main.ts
```
