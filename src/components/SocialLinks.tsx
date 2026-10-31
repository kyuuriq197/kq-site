import { profile } from '../config/profile';
import { SocialButton } from './SocialButton';

export function SocialLinks() {
  const links = profile.socialLinks.filter((l) => l.enabled && l.url);
  return (
    <div className="socials">
      {links.map((link) => (
        <SocialButton
          key={link.id}
          platform={link.platform}
          label={link.label}
          url={link.url}
        />
      ))}
    </div>
  );
}
