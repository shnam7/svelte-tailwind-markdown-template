/**
 * Code Highlighting
 * ref: https://rodneylab.com/sveltekit-shiki-syntax-highlighting/
 *
 */

// @ts-nocheck
import shiki from 'shiki';
import { parse } from 'node-html-parser';
import pkg from '../package.json' assert { type: 'json' };
const theme = pkg.shiki?.theme || 'github-dark';

const shikiHighlighter = await shiki.getHighlighter({
    theme: theme,
});

/**
 * @param {string} code
 */
function escapeHtml(code) {
    const _map = {
        // '&': '&amp;',
        // '<': '&lt;',
        // '>': '&gt;',
        // '"': '&quot;',
        // "'": '&#039',
        // '{': '&#123',
        // '}': '&#125',
        '{': '&lbrace;',
        '}': '&rbrace;',
    };

    const re = RegExp(`[${Object.keys(_map)}]`, 'g');
    // @ts-ignore
    return code.replace(re, (m) => _map[m]);
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
function makeFocussable(html) {
    const root = parse(html);
    if (!root) return html;

    const pre = root.querySelector('pre');
    if (pre) pre.setAttribute('tabIndex', '0');
    return root.toString();
}

/**
 * @param {string} code - code to highlight
 * @param {string} lang - code language
 */
function highlight(code, lang) {
    const html = shikiHighlighter.codeToHtml(code, { lang });
    return makeFocussable(escapeHtml(html));
}

/**
 * Strip <pre><code> tags because both marked and shiki are rendering them.
 * @param {string} code - code to highlight
 * @param {string} lang - code language
 */
function highlightStripped(code, lang) {
    const tokens = shikiHighlighter.codeToThemedTokens(code, lang);
    const html = shiki.renderToHtml(tokens, {
        elements: {
            pre: ({ className, style, children }) => {
                // remove <pre> tag and return it's children only
                return `${children}`;
            },
            code: ({ className, style, children }) => {
                // remove <code> tag and return it's children only
                return `${children}`;
            },
        },
    });
    return makeFocussable(escapeHtml(html));
}

// /**
//  * @param {string} code
//  * @param {string} lang
//  *
//  * ref: https://github.com/jonschlinkert/remarkable
//  */
// export function highlight(code, lang) {
//     // console.log('--->', lang, code);
//     if (lang && hljs.getLanguage(lang)) {
//         try {
//             return hljs.highlight(lang, code).value;
//         } catch (err) {}
//     }
//     try {
//         return hljs.highlightAuto(code).value;
//     } catch (err) {}

//     return ''; // use external default escaping
// }

export { highlight, highlightStripped, escapeHtml };
