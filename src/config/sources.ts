import type { Source } from './source';
import { SourceGroup } from './source-group';
import { Stance } from './stance';

// Every source the site draws on. Links were last checked in November 2026.
export const sources: ReadonlyArray<Source> = [
    {
        title: 'Computerphile video on HTML',
        by: 'Professor David Brailsford, University of Nottingham, for Computerphile',
        url: 'https://www.youtube.com/watch?v=4A2mWqLUpzw',
        group: SourceGroup.Opinions,
        stance: Stance.For,
        summary:
            'Describes HTML as a very restricted kind of programming language: declarative rather than imperative, saying ' +
            'what should result rather than how. The strongest case for HTML, discussed in part 2.',
    },
    {
        title: 'Answer to "Is HTML considered a programming language?"',
        by: 'Chris Pietschmann, on Stack Overflow',
        url: 'https://stackoverflow.com/a/145177/1033686',
        group: SourceGroup.Opinions,
        stance: Stance.For,
        summary: 'Yes, a declarative one: "Any instruction that tells the computer to do something is a programming language."',
    },
    {
        title: 'Answer to "Is HTML considered a programming language?"',
        by: 'brian d foy, on Stack Overflow',
        url: 'https://stackoverflow.com/a/145179/1033686',
        group: SourceGroup.Opinions,
        stance: Stance.Against,
        summary:
            'No: "The \'M\' stands for \'Markup\'." A programming language describes a process; HTML adds context and ' +
            'structure to text.',
    },
    {
        title: 'Why HTML is not a programming language',
        by: 'Ben Romy, Syracuse University iSchool',
        url: 'https://web.archive.org/web/20240529172308/https://ischool.syr.edu/why-html-is-not-a-programming-language/',
        group: SourceGroup.Opinions,
        stance: Stance.Against,
        archived: true,
        summary:
            'HTML has no logic, conditions, variables or functions, and "you can\'t compute the sum of 2 + 2 in HTML". ' +
            'Quoted in part 2, and answered by the adding machine demo.',
    },
    {
        title: 'Is HTML a programming language?',
        by: 'Kenzie Academy, Southern New Hampshire University',
        url: 'https://web.archive.org/web/20230317113439/https://kenzie.snhu.edu/blog/is-html-a-programming-language/',
        group: SourceGroup.Opinions,
        stance: Stance.Against,
        archived: true,
        summary:
            'Opens by calling HTML "one of the most widely used programming languages", then argues it isn\'t one, because ' +
            'programming languages involve logic and algorithms and markup languages don\'t.',
    },
    {
        title: 'Is HTML a programming language?',
        by: 'Darcy DeClute, for TheServerSide',
        url: 'https://www.theserverside.com/feature/Is-HTML-a-programming-language',
        group: SourceGroup.Opinions,
        stance: Stance.Against,
        summary:
            'HTML isn\'t Turing-complete and can\'t perform arbitrary computation; it marks up content. Also considers HTML ' +
            'with CSS, and concludes that the pair don\'t qualify either.',
    },
    {
        title: 'HTML is not a programming language?',
        by: 'Alvaro Montoro, for CSS-Tricks',
        url: 'https://css-tricks.com/html-is-not-a-programming-language/',
        group: SourceGroup.Opinions,
        stance: Stance.Undecided,
        summary:
            'Doesn\'t argue that HTML is a programming language, but takes apart the usual arguments that it isn\'t, and ' +
            'points out that what counts as programming keeps changing. Quoted in the verdict.',
    },
    {
        title: 'Is HTML considered a programming language?',
        by: 'Stack Overflow',
        url: 'https://stackoverflow.com/questions/145176/is-html-considered-a-programming-language',
        group: SourceGroup.Opinions,
        stance: Stance.Undecided,
        summary:
            'The long-running question itself. Most answers lean towards no, usually because HTML is a markup language or ' +
            'isn\'t Turing-complete: the two arguments part 1 examines.',
    },
    {
        title: 'Definition of programming',
        by: 'Google, from Oxford Languages',
        url: 'https://www.google.com/search?q=programming+definition',
        group: SourceGroup.Background,
        summary: '"The process or activity of writing computer programs." One of the four definitions in part 1.',
    },
    {
        title: 'Intro to programming',
        by: 'Khan Academy',
        url: 'https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro',
        group: SourceGroup.Background,
        summary: 'Programming as creating instructions that tell a computer how to perform a task: the broad definition in part 1.',
    },
    {
        title: 'Programming',
        by: 'Techopedia',
        url: 'https://www.techopedia.com/definition/13128/programming',
        group: SourceGroup.Background,
        summary: 'Programming as "the implementation of logic": the definition in part 1 that asks for logic.',
    },
    {
        title: 'Computer programming',
        by: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Computer_programming',
        group: SourceGroup.Background,
        summary: 'Programming as writing the sequences of instructions, called programs, that computers follow.',
    },
    {
        title: 'Programming language',
        by: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Programming_language',
        group: SourceGroup.Background,
        summary:
            'Where different authors draw the line between programming languages and other computer languages, including ' +
            'John C. Reynolds\' broad view, summarised in part 1.',
    },
    {
        title: 'Turing completeness',
        by: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Turing_completeness',
        group: SourceGroup.Background,
        summary: 'What it means for a system to compute anything a computer can: the strictest of the four tests.',
    },
    {
        title: 'Computerphile video on Turing completeness',
        by: 'Professor David Brailsford, for Computerphile',
        url: 'https://www.youtube.com/watch?v=RPQD7-AOjMI',
        group: SourceGroup.Background,
        summary: 'A plain-spoken explanation of Turing completeness, from the same series as the video on HTML.',
    },
    {
        title: 'Rule 110',
        by: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Rule_110',
        group: SourceGroup.Background,
        summary: 'The rule behind the Rule 110 demo, and Matthew Cook\'s proof, published in 2004, that it is Turing-complete.',
    },
    {
        title: 'Quine (computing)',
        by: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Quine_(computing)',
        group: SourceGroup.Background,
        summary: 'Programs that print their own source code, like the quine demo.',
    },
    {
        title: 'x86CSS',
        by: 'Lyra Rebane, 2026',
        url: 'https://lyra.horse/x86css/',
        group: SourceGroup.Projects,
        summary:
            'An emulator of an x86 processor written in CSS, which runs compiled C programs with no JavaScript, driven by a ' +
            'CSS animation rather than a person. Runs in Chromium-based browsers and Ladybird. Discussed in part 4.',
    },
    {
        title: 'x86CSS source code',
        by: 'Lyra Rebane, on GitHub',
        url: 'https://github.com/rebane2001/x86css',
        group: SourceGroup.Projects,
        summary: 'The code behind x86CSS, including the build script that turns a compiled program into CSS.',
    },
    {
        title: 'The CPU Hack',
        by: 'Jane Ori, on DEV Community, 2023',
        url: 'https://dev.to/janeori/series/24634',
        group: SourceGroup.Projects,
        summary:
            'Techniques for building a processor-like loop in CSS, which x86CSS credits as its starting point. It runs while ' +
            'the pointer is held over the page.',
    },
    {
        title: 'Rule 110 in HTML and CSS',
        by: 'Eli Fox-Epstein, 2011, discussed on Stack Overflow',
        url: 'https://stackoverflow.com/questions/5357725/how-does-this-implementation-of-turing-complete-rule-110-in-html5-css3-work',
        group: SourceGroup.Projects,
        summary:
            'The well-known demo of Rule 110 in HTML and CSS, advanced by pressing keys. Whether it proves HTML and CSS ' +
            'Turing-complete is still argued over, because it needs a person to drive it.',
    },
];
