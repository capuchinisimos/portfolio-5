import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaTelegramPlane, FaRedditAlien, FaTumblr, FaVk } from 'react-icons/fa'
const Footer = () => {
  const siteUrl = encodeURIComponent('https://www.oceane-developpeuse.info');
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between px-6 py-8 md:p-12">
      
       <Link href={"/#about"} 
       className="text-xl  text-white font-semibold">
       <span> &lt;/Océane dev&gt;</span></Link>
       <div className="social-links"  style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'  }}>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on Facebook">
          <FaFacebookF />
        </a>

        <a href={`https://twitter.com/intent/tweet?url=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on Twitter">
          <FaTwitter />
        </a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn">
  <FaLinkedinIn />
</a>
<a href={`https://pinterest.com/pin/create/button/?url=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on Pinterest">
  <FaPinterestP />
</a>
<a href={`https://api.whatsapp.com/send?text=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on WhatsApp">
  <FaWhatsapp />
</a>
<a href={`https://t.me/share/url?url=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on Telegram">
  <FaTelegramPlane />
</a>
<a href={`https://reddit.com/submit?url=${siteUrl}&title=YourTitleHere`} target="_blank" rel="noopener noreferrer" title="Share on Reddit">
  <FaRedditAlien />
</a>
<a href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on Tumblr">
  <FaTumblr />
</a>
<a href={`https://vk.com/share.php?url=${siteUrl}`} target="_blank" rel="noopener noreferrer" title="Share on VK">
  <FaVk />
</a>

</div>
        <Link href={"https://oceaneverdi.me/"} target="_blank" rel="noopener noreferrer" 
        className="text-white-600 mt-4 md:mt-0">© 2024 Océane dev. Tous droits réservés.</Link> 
      </div>
      

    </footer>
  );
};

export default Footer;


