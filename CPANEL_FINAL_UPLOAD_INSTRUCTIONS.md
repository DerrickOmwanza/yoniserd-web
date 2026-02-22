# Final cPanel Upload Instructions - Step by Step

**Status:** ✅ QA Audit Complete - Ready to Deploy  
**All Tests Passed:** Mobile (375px), Tablet (768px), Desktop (1280px)  
**Build Location:** `c:/Users/ADMIN/ynis-rd-website/build/`

---

## 📋 Pre-Upload Checklist

Before you start, verify:
- [ ] You have cPanel login credentials
- [ ] You have FTP/File Manager access
- [ ] Internet connection is stable
- [ ] You have time for the upload (5-10 minutes)

---

## 🚀 Step-by-Step Upload Process

### STEP 1: Connect to Your cPanel

**Option A: Using cPanel File Manager (Easiest)**

1. Log in to your cPanel at: `https://yoniserd.co.ke:2083`
   - Username: Your cPanel username
   - Password: Your cPanel password

2. Click **"File Manager"** in the left sidebar

3. A window opens showing your server files

4. Make sure you're in the **"public_html"** directory (you should see this path at the top)

**Option B: Using FTP Client (FileZilla)**

1. Open FileZilla FTP software

2. Click **"File → Site Manager"**

3. Enter:
   - **Host:** yoniserd.co.ke (or your server IP)
   - **Protocol:** SFTP or FTP
   - **Port:** 22 (SFTP) or 21 (FTP)
   - **User:** Your cPanel username
   - **Password:** Your cPanel password

4. Click **"Connect"**

5. Navigate to **public_html** folder on the right panel

---

### STEP 2: Delete Old Files

**⚠️ IMPORTANT:** You must delete old files first to avoid conflicts.

#### Using cPanel File Manager:

1. You're now in `public_html/`

2. **Select and DELETE these:**
   - ✓ `index.html` (old homepage)
   - ✓ `static/` folder (old CSS/JS/assets)
   - ✓ Any other old React files

   **How to delete:**
   - Right-click the file/folder
   - Click "Delete"
   - Confirm

3. When done, the `public_html/` folder should be **nearly empty** (only keep `.htaccess` and `robots.txt` if they exist from before)

#### Using FileZilla:

1. In the right panel (server), select:
   - `index.html`
   - `static/` folder

2. Right-click → **"Delete"**

3. Confirm deletion

---

### STEP 3: Upload New Build Files

#### Using cPanel File Manager:

1. Back in cPanel File Manager, make sure you're in `public_html/`

2. Click the **"Upload"** button at the top

3. A file picker opens

4. Navigate to: `c:/Users/ADMIN/ynis-rd-website/build/`

5. **Select ALL files and folders inside build/:**
   - ✓ `index.html`
   - ✓ `static/` folder
   - ✓ `favicon.ico`
   - ✓ `.htaccess`
   - ✓ `manifest.json`
   - ✓ `robots.txt`
   - ✓ `_redirects`
   - ✓ Other files

6. Click **"Upload"** or drag files into the upload area

7. **Wait for upload to complete** (watch the progress bar)

#### Using FileZilla:

1. On your **left panel** (local), navigate to: `c:/Users/ADMIN/ynis-rd-website/build/`

2. **Select ALL files and folders** in the build folder

3. Drag them to the **right panel** (server, public_html folder)

4. Or right-click → **"Upload"**

5. **Wait for upload to complete** (watch transfer status)

---

### STEP 4: Verify Upload

1. In cPanel File Manager, refresh and check:
   - [ ] `public_html/index.html` exists
   - [ ] `public_html/static/` folder exists
   - [ ] `public_html/static/css/` has `main.*.css` file
   - [ ] `public_html/static/js/` has `main.*.js` file

2. **All files should be there**

---

### STEP 5: Clear Browser Cache

**CRITICAL:** Browser cache might show old version. Clear it:

#### Chrome/Edge:
1. Press **Ctrl+Shift+Delete**
2. Click **"Clear data"**

#### Safari:
1. Go to **Preferences → Privacy**
2. Click **"Manage Website Data"**
3. Click **"Remove All"**

#### Firefox:
1. Press **Ctrl+Shift+Delete**
2. Click **"Clear Now"**

#### OR use **Incognito/Private Window:**
- Chrome: **Ctrl+Shift+N**
- Safari: **Cmd+Shift+N**
- Firefox: **Ctrl+Shift+P**

---

### STEP 6: Test the Live Website

1. Open your browser

2. Go to: **https://yoniserd.co.ke**

3. **Verify you see:**
   - [ ] Homepage loads (no errors)
   - [ ] Logo and navbar visible
   - [ ] Hero section displays
   - [ ] All images load
   - [ ] Mobile menu hamburger icon visible (white)
   - [ ] Colors look right (Deep Forest, Champagne, Green)

4. **Test on mobile phone:**
   - Tap hamburger icon → menu should slide in from right
   - Tap menu items → should navigate
   - Close menu with X button

5. **Test on different pages:**
   - Click "About Us" → about page loads
   - Click "Contact" → contact page loads
   - Click "Gallery" → gallery page loads
   - Click "News" → news page loads

---

### STEP 7: Fix HTTPS (SSL) - Optional but Recommended

If you still see "Connection not secure" warning:

1. Go back to cPanel

2. Find **"SSL/TLS Manager"** or **"AutoSSL"**

3. Click **"Install Certificate"** for your domain

4. Add HTTPS redirect to `.htaccess`:

#### Using File Manager to Edit .htaccess:

1. In cPanel File Manager, go to `public_html/`

2. Right-click `.htaccess` → **"Edit"**

3. Add at the **very top:**

```apache
# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

4. Click **"Save"** or **"Edit"** button

5. Refresh your website - should auto-redirect to HTTPS

---

## ✅ Verification Checklist

After upload, verify:

- [ ] Website loads without errors
- [ ] Homepage displays correctly
- [ ] All images load properly
- [ ] Navigation menu works (desktop)
- [ ] Hamburger menu works (mobile)
- [ ] Mobile menu is white and visible
- [ ] Mobile menu slides from right
- [ ] Spacing looks compact (no wasted space)
- [ ] Impact section has dark green background
- [ ] Principles cards show all text
- [ ] Forms are functional
- [ ] Links navigate correctly
- [ ] Mobile responsive (test on phone)
- [ ] Tablet responsive (test iPad size)
- [ ] Desktop responsive (test at 1280px)
- [ ] HTTPS shows secure padlock (if SSL enabled)

---

## 🔧 Troubleshooting

### Website shows old version
**Solution:** Clear browser cache completely
- Use Ctrl+Shift+Delete
- OR test in incognito/private window
- Wait 5 minutes (CDN cache)

### Hamburger menu not visible
**Solution:** 
- Clear cache
- Make sure CSS file uploaded (static/css/main.*.css)
- Check browser console (F12) for errors

### Files not uploading
**Solution:**
- Check internet connection
- Try uploading smaller batches
- Check cPanel file limits
- Try FTP instead of File Manager

### Website crashes
**Solution:**
- Delete everything you just uploaded
- Re-upload the entire build/ folder
- Check for errors in browser console (F12)

### Wrong colors or styling
**Solution:**
- Verify `static/css/main.*.css` exists in server
- Clear all browser cache
- Wait 10 minutes for CDN
- Check file was fully uploaded

---

## 📞 Support Resources

If you need help:

1. **Check cPanel Help:**
   - cPanel documentation in your hosting control panel
   - Search "File Manager" or "FTP"

2. **Check Browser Console:**
   - Press F12
   - Go to "Console" tab
   - Look for red error messages

3. **Contact Hosting Provider:**
   - Truehost support
   - Ask about file upload limits
   - Ask about SSL certificate installation

---

## 🎉 You're Done!

Once all verification steps pass, your website is **live and ready!**

Your mobile-optimized YoNISeRD website is now accessible at:
- **https://yoniserd.co.ke** (with HTTPS if you added SSL)

---

## 📊 What Was Uploaded

Your new deployment includes:

✅ **Mobile responsiveness fixes**
- Compact spacing (no wasted space)
- Visible hamburger icon (white with shadow)
- Professional slide-in mobile menu
- Dark green Impact section on mobile
- Fully visible Principles cards

✅ **Design improvements**
- Deep Forest + Accent Green colors
- Smooth animations (300ms)
- Professional NGO-standard styling
- WCAG 2.1 AA accessibility

✅ **Performance**
- Gzip compression enabled
- Caching headers set
- Optimized CSS (17.08 kB)
- Fast animations

---

## ✨ Summary

| Item | Status |
|------|--------|
| Build Complete | ✅ |
| QA Testing | ✅ |
| GitHub Commit | ✅ |
| Upload Instructions | ✅ |
| Ready to Deploy | ✅ |

**You're all set! Follow the steps above and your website will be live.** 🚀

---

**Questions?** Refer back to this guide or check the browser console (F12) for detailed error messages.

**Good luck with your deployment!** 🎉
