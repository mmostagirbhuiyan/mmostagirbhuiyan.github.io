import { useState, useRef, useEffect, useMemo, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineControl } from 'react-icons/ai';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';

/**
 * Renders a theme changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const themeList = useMemo(
    () => [
      themeConfig.defaultTheme,
      ...themeConfig.themes.filter((item) => item !== themeConfig.defaultTheme),
    ],
    [themeConfig],
  );

  useEffect(() => {
    if (!open) return;
    function handleClick(e: Event) {
      if (btnRef.current && btnRef.current.contains(e.target as Node)) return;
      if (listRef.current && listRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  useEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const dropdownWidth = 208; // w-52 is 13rem = 208px
      const padding = 16;

      let left = rect.left + window.scrollX;

      // If dropdown would overflow right side of screen, right-align it with the button
      // or shift it left to fit in the viewport
      if (rect.left + dropdownWidth > window.innerWidth) {
        left = window.innerWidth + window.scrollX - dropdownWidth - padding;
      }

      // Ensure it doesn't overflow the left side
      left = Math.max(padding, left);

      setDropdownPos({
        top: rect.bottom + window.scrollY + 8,
        left: left,
      });
      setFocusedIndex(themeList.findIndex((t) => t === theme));
    }
  }, [open, theme, themeList]);

  useEffect(() => {
    if (open && listRef.current && focusedIndex >= 0) {
      const el = listRef.current.children[focusedIndex] as HTMLElement;
      if (el) el.focus();
    }
  }, [focusedIndex, open]);

  useEffect(() => {
    console.log('ThemeChanger themeConfig:', themeConfig);
    console.log('ThemeChanger themeConfig.themes:', themeConfig.themes);
  }, [themeConfig]);

  const changeTheme = (selectedTheme: string) => {
    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);
    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);
    setTheme(selectedTheme);
    setOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % themeList.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(
        (prev) => (prev - 1 + themeList.length) % themeList.length,
      );
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      changeTheme(themeList[focusedIndex]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="card glass-bg overflow-visible compact relative">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : theme === themeConfig.defaultTheme
                ? 'Default'
                : theme}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              widthCls: 'w-14 md:w-28',
              heightCls: 'h-10',
              className: 'mr-6',
            })
          ) : (
            <button
              ref={btnRef}
              title="Change Theme"
              className="btn btn-ghost m-1 normal-case opacity-50 text-base-content relative"
              onClick={() => setOpen((v) => !v)}
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onKeyDown={handleKeyDown}
            >
              <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
              <span className="hidden md:inline">Change Theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                className="inline-block w-4 h-4 ml-1 fill-current"
              >
                <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
              </svg>
            </button>
          )}
        </div>
        {!!(open && !loading && dropdownPos) &&
          createPortal(
            <ul
              ref={listRef}
              className="overflow-y-auto shadow-2xl max-h-96 w-52 rounded-lg bg-base-100/90 backdrop-blur-xl border border-base-content/10 z-[99999] py-2 focus:outline-none"
              style={{
                position: 'absolute',
                top: dropdownPos.top,
                left: dropdownPos.left,
                listStyle: 'none',
              }}
              tabIndex={-1}
              role="listbox"
              aria-activedescendant={themeList[focusedIndex]}
              onKeyDown={handleKeyDown}
            >
              {themeList.map((item, index) => (
                <li key={item} className="px-2 mb-1 last:mb-0">
                  <button
                    type="button"
                    className={`w-full text-left px-4 py-2 rounded-md transition-all duration-200 font-medium capitalize flex items-center justify-between
                      ${theme === item
                        ? 'bg-primary text-primary-content shadow-md'
                        : 'text-base-content hover:bg-base-content/10'
                      } 
                      ${focusedIndex === index ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
                    onClick={() => changeTheme(item)}
                    onMouseEnter={() => setFocusedIndex(index)}
                    role="option"
                    aria-selected={theme === item}
                    tabIndex={-1}
                  >
                    <span>
                      {item === 'procyon' ? 'Deep Space (Dark)' :
                        item === 'light' ? 'Executive (Light)' :
                          item === themeConfig.defaultTheme ? 'Default' : item}
                    </span>
                    {theme === item && <span className="text-xs opacity-70">Active</span>}
                  </button>
                </li>
              ))}
            </ul>,
            document.body,
          )}
      </div>
    </div>
  );
};

export default ThemeChanger;
