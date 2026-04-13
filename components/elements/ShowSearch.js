'use client'
import { useEffect } from 'react';

export default function ShowSearch() {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const clickID = e.target.id;
      const clickClass = e.target.className;

      if (clickID !== 's') {
        const boxContentSearch = document.querySelector('.box-content-search');
        if (boxContentSearch) {
          boxContentSearch.classList.remove('active');
        }
      }

      if (clickClass !== 'a111') {
        const showSearchButtons = document.querySelectorAll('.show-search');
        showSearchButtons.forEach(button => {
          button.classList.remove('active');
        });
      }
    };

    const handleShowSearchClick = (event) => {
      event.stopPropagation();
      const boxContentSearch = document.querySelector('.box-content-search');
      if (boxContentSearch) {
        boxContentSearch.classList.add('active');
      }
    };

    document.addEventListener('click', handleDocumentClick);
    const showSearchButtons = document.querySelectorAll('.show-search');
    showSearchButtons.forEach(button => {
      button.addEventListener('click', handleShowSearchClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      showSearchButtons.forEach(button => {
        button.removeEventListener('click', handleShowSearchClick);
      });
    };
  }, []);

  return null;
}
