/*
  ============================================
  فایل JavaScript اصلی کلینیک پزشکی
  ============================================
  این فایل شامل:
  - تنظیمات RTL برای زبان فارسی
  - انیمیشن‌ها و افکت‌ها
  - تعامل با کاربر
  - بهینه‌سازی عملکرد
  ============================================
*/

// ============================================
// تنظیمات اولیه
// ============================================
(function() {
  'use strict';

  // منتظر بارگذاری کامل صفحه
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });

  // ============================================
  // تابع اصلی راه‌اندازی
  // ============================================
  function initializeApp() {
    setupRTL();
    setupNavigation();
    setupAnimations();
    setupInteractiveElements();
    setupPerformanceOptimizations();
    setupAccessibility();
  }

  // ============================================
  // تنظیمات RTL
  // ============================================
  function setupRTL() {
    // تنظیم جهت متن برای عناصر خاص
    const ltrElements = document.querySelectorAll('.ltr, [dir="ltr"]');
    ltrElements.forEach(function(element) {
      element.style.direction = 'ltr';
      element.style.textAlign = 'left';
    });

    // تنظیم اعداد انگلیسی
    const numbers = document.querySelectorAll('.number, .price, .date-number');
    numbers.forEach(function(element) {
      element.classList.add('ltr');
    });

    // تنظیم کدهای CSS و JavaScript
    const codeElements = document.querySelectorAll('code, pre');
    codeElements.forEach(function(element) {
      element.classList.add('ltr');
    });
  }

  // ============================================
  // تنظیمات ناوبری
  // ============================================
  function setupNavigation() {
    // منوی موبایل
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        
        // تغییر آیکون منو
        const icon = this.querySelector('.menu-icon');
        if (icon) {
          icon.classList.toggle('active');
        }
      });
    }

    // بستن منو با کلیک خارج از آن
    document.addEventListener('click', function(event) {
      if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
          navMenu.classList.remove('active');
          if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
          }
        }
      }
    });

    // اسکرول نرم برای لینک‌های داخلی
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.site-header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // تنظیمات انیمیشن‌ها
  // ============================================
  function setupAnimations() {
    // انیمیشن ورود عناصر
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // عناصر قابل انیمیشن
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .blog-post, .device-card');
    animatedElements.forEach(function(element) {
      observer.observe(element);
    });

    // انیمیشن شمارنده‌ها
    const counters = document.querySelectorAll('.counter');
    counters.forEach(function(counter) {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 ثانیه
      const increment = target / (duration / 16); // 60 FPS
      let current = 0;

      const updateCounter = function() {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      });

      counterObserver.observe(counter);
    });
  }

  // ============================================
  // تنظیمات عناصر تعاملی
  // ============================================
  function setupInteractiveElements() {
    // گالری تصاویر
    setupImageGallery();
    
    // تب‌ها
    setupTabs();
    
    // فیلترها
    setupFilters();
    
    // فرم‌ها
    setupForms();
    
    // دکمه‌های عملی
    setupActionButtons();
  }

  // ============================================
  // تنظیمات گالری تصاویر
  // ============================================
  function setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-device-image');

    if (thumbnails.length && mainImage) {
      thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
          // حذف کلاس active از همه thumbnail ها
          thumbnails.forEach(t => t.classList.remove('active'));
          
          // اضافه کردن کلاس active به thumbnail کلیک شده
          this.classList.add('active');
          
          // تغییر تصویر اصلی با انیمیشن
          mainImage.style.opacity = '0';
          setTimeout(function() {
            mainImage.src = thumbnail.dataset.src;
            mainImage.style.opacity = '1';
          }, 150);
        });
      });
    }
  }

  // ============================================
  // تنظیمات تب‌ها
  // ============================================
  function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length && tabPanes.length) {
      tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          const targetTab = this.dataset.tab;

          // حذف کلاس active از همه دکمه‌ها و تب‌ها
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));

          // اضافه کردن کلاس active به دکمه و تب انتخاب شده
          this.classList.add('active');
          const targetPane = document.getElementById(targetTab);
          if (targetPane) {
            targetPane.classList.add('active');
          }
        });
      });
    }
  }

  // ============================================
  // تنظیمات فیلترها
  // ============================================
  function setupFilters() {
    // فیلتر تجهیزات
    const categoryFilter = document.querySelector('.category-filter');
    const searchInput = document.querySelector('.search-input');
    const deviceCards = document.querySelectorAll('.device-card');

    function filterDevices() {
      const category = categoryFilter ? categoryFilter.value : '';
      const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

      deviceCards.forEach(function(card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const specs = card.querySelector('.device-specs').textContent.toLowerCase();

        const matchesCategory = !category || card.dataset.category === category;
        const matchesSearch = !searchTerm || 
          title.includes(searchTerm) || 
          description.includes(searchTerm) || 
          specs.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    }

    if (categoryFilter) {
      categoryFilter.addEventListener('change', filterDevices);
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterDevices);
    }

    // فیلتر مقالات
    const blogSearchInput = document.querySelector('.blog-search-input');
    const blogCategorySelect = document.querySelector('.blog-category-select');
    const blogItems = document.querySelectorAll('.blog-item');

    function filterBlogs() {
      const searchTerm = blogSearchInput ? blogSearchInput.value.toLowerCase() : '';
      const category = blogCategorySelect ? blogCategorySelect.value : '';

      blogItems.forEach(function(item) {
        const title = item.querySelector('h2 a').textContent.toLowerCase();
        const content = item.querySelector('p').textContent.toLowerCase();
        const itemCategory = item.querySelector('.category').textContent;

        const matchesSearch = !searchTerm || 
          title.includes(searchTerm) || 
          content.includes(searchTerm);
        const matchesCategory = !category || itemCategory === category;

        if (matchesSearch && matchesCategory) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    }

    if (blogSearchInput) {
      blogSearchInput.addEventListener('input', filterBlogs);
    }

    if (blogCategorySelect) {
      blogCategorySelect.addEventListener('change', filterBlogs);
    }
  }

  // ============================================
  // تنظیمات فرم‌ها
  // ============================================
  function setupForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // اعتبارسنجی فرم
        if (validateForm(this)) {
          submitForm(this);
        }
      });
    });
  }

  function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(function(input) {
      if (!input.value.trim()) {
        showError(input, 'این فیلد الزامی است');
        isValid = false;
      } else {
        clearError(input);
      }

      // اعتبارسنجی ایمیل
      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          showError(input, 'ایمیل معتبر نیست');
          isValid = false;
        }
      }

      // اعتبارسنجی شماره تلفن
      if (input.type === 'tel' && input.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(input.value)) {
          showError(input, 'شماره تلفن معتبر نیست');
          isValid = false;
        }
      }
    });

    return isValid;
  }

  function showError(input, message) {
    clearError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--danger-color)';
    errorDiv.style.fontSize = 'var(--font-size-small)';
    errorDiv.style.marginTop = 'var(--spacing-xs)';
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = 'var(--danger-color)';
  }

  function clearError(input) {
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    input.style.borderColor = '';
  }

  function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // نمایش حالت بارگذاری
    submitButton.textContent = 'در حال ارسال...';
    submitButton.disabled = true;

    // شبیه‌سازی ارسال فرم
    setTimeout(function() {
      showSuccessMessage('فرم با موفقیت ارسال شد');
      form.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  }

  // ============================================
  // تنظیمات دکمه‌های عملی
  // ============================================
  function setupActionButtons() {
    // دکمه درخواست نوبت
    const appointmentButtons = document.querySelectorAll('.btn-appointment');
    appointmentButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        showModal('appointment-modal', 'درخواست نوبت');
      });
    });

    // دکمه مشاوره رایگان
    const consultationButtons = document.querySelectorAll('.btn-consultation');
    consultationButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        showModal('consultation-modal', 'مشاوره رایگان');
      });
    });

    // دکمه دانلود کاتالوگ
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        downloadFile('catalog.pdf', 'کاتالوگ کلینیک پزشکی');
      });
    });
  }

  // ============================================
  // نمایش مودال
  // ============================================
  function showModal(modalId, title) {
    const modal = document.getElementById(modalId);
    if (modal) {
      const modalTitle = modal.querySelector('.modal-title');
      if (modalTitle) {
        modalTitle.textContent = title;
      }
      
      modal.style.display = 'block';
      modal.classList.add('fade-in');
      
      // بستن مودال
      const closeButton = modal.querySelector('.close-modal');
      if (closeButton) {
        closeButton.addEventListener('click', function() {
          closeModal(modal);
        });
      }
      
      // بستن با کلیک خارج از مودال
      modal.addEventListener('click', function(event) {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    }
  }

  function closeModal(modal) {
    modal.classList.remove('fade-in');
    setTimeout(function() {
      modal.style.display = 'none';
    }, 300);
  }

  // ============================================
  // دانلود فایل
  // ============================================
  function downloadFile(filename, title) {
    const link = document.createElement('a');
    link.href = `../statics/files/${filename}`;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showSuccessMessage('فایل در حال دانلود است');
  }

  // ============================================
  // نمایش پیام‌ها
  // ============================================
  function showSuccessMessage(message) {
    showNotification(message, 'success');
  }

  function showErrorMessage(message) {
    showNotification(message, 'error');
  }

  function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // استایل‌های اعلان
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = 'var(--spacing-md)';
    notification.style.borderRadius = '5px';
    notification.style.color = 'var(--white)';
    notification.style.fontWeight = '600';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform var(--transition-base)';
    
    if (type === 'success') {
      notification.style.backgroundColor = 'var(--success-color)';
    } else {
      notification.style.backgroundColor = 'var(--danger-color)';
    }
    
    document.body.appendChild(notification);
    
    // انیمیشن ورود
    setTimeout(function() {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // حذف خودکار
    setTimeout(function() {
      notification.style.transform = 'translateX(100%)';
      setTimeout(function() {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // ============================================
  // بهینه‌سازی عملکرد
  // ============================================
  function setupPerformanceOptimizations() {
    // Lazy loading تصاویر
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(function(img) {
      imageObserver.observe(img);
    });

    // بهینه‌سازی اسکرول
    let ticking = false;
    function updateOnScroll() {
      // عملیات مربوط به اسکرول
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick);
  }

  // ============================================
  // تنظیمات دسترسی‌پذیری
  // ============================================
  function setupAccessibility() {
    // پشتیبانی از کلیدهای صفحه کلید
    document.addEventListener('keydown', function(event) {
      // ESC برای بستن مودال‌ها
      if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="display: block"]');
        openModals.forEach(function(modal) {
          closeModal(modal);
        });
      }
    });

    // بهبود فوکوس
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach(function(element) {
      element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
      });
      
      element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
      });
    });

    // پشتیبانی از کاهش حرکت
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--transition-base', '0.01ms');
      document.documentElement.style.setProperty('--transition-fast', '0.01ms');
      document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    }
  }

})();