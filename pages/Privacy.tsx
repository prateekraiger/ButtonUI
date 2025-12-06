import React from "react";
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-6">
            <Shield className="w-3 h-3" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-lg">
            Last updated: December 6, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <p className="text-zinc-300 leading-relaxed">
            At ButtonUI, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information
            when you visit our website. Please read this privacy policy carefully.
            If you do not agree with the terms of this privacy policy, please do
            not access the site.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section
            icon={<Database className="w-5 h-5 text-purple-400" />}
            title="Information We Collect"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  We may collect information about you in a variety of ways. The
                  information we may collect on the Site includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>
                    <strong>Personal Data:</strong> Personally identifiable
                    information, such as your name and email address, that you
                    voluntarily give to us when you contact us or use our services.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information our servers
                    automatically collect when you access the Site, such as your IP
                    address, browser type, operating system, access times, and the
                    pages you have viewed.
                  </li>
                  <li>
                    <strong>Cookies and Tracking Technologies:</strong> We may use
                    cookies and similar tracking technologies to access or store
                    information.
                  </li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Lock className="w-5 h-5 text-cyan-400" />}
            title="Use of Your Information"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  We may use the information we collect from you in the following
                  ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>To operate and maintain our website</li>
                  <li>To improve your experience on our site</li>
                  <li>To send you updates and marketing communications</li>
                  <li>To respond to your comments and questions</li>
                  <li>To monitor and analyze usage and trends</li>
                  <li>To prevent fraudulent transactions and protect against criminal activity</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Eye className="w-5 h-5 text-emerald-400" />}
            title="Disclosure of Your Information"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  We may share information we have collected about you in certain
                  situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>
                    <strong>By Law or to Protect Rights:</strong> If we believe the
                    release of information is necessary to comply with the law or
                    protect the rights of ButtonUI or others.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> We may share or transfer
                    your information in connection with a merger, sale, or
                    acquisition.
                  </li>
                  <li>
                    <strong>Third-Party Service Providers:</strong> We may share
                    your information with third parties that perform services for us.
                  </li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<UserCheck className="w-5 h-5 text-rose-400" />}
            title="Your Rights"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>
                    <strong>Access:</strong> You have the right to request access to
                    the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You have the right to request
                    correction of inaccurate personal information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You have the right to request deletion
                    of your personal information.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You can opt out of receiving marketing
                    communications from us at any time.
                  </li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Shield className="w-5 h-5 text-yellow-400" />}
            title="Security"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  We use administrative, technical, and physical security measures to
                  help protect your personal information. While we have taken
                  reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures
                  are perfect or impenetrable, and no method of data transmission can
                  be guaranteed against any interception or other type of misuse.
                </p>
              </div>
            }
          />

          <Section
            icon={<AlertCircle className="w-5 h-5 text-orange-400" />}
            title="Third-Party Websites"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  The Site may contain links to third-party websites and applications
                  of interest. Once you have used these links to leave the Site, any
                  information you provide to these third parties is not covered by
                  this Privacy Policy, and we cannot guarantee the safety and privacy
                  of your information.
                </p>
              </div>
            }
          />
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <a
            href="mailto:privacy@buttonui.com"
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            privacy@buttonui.com
          </a>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}> = ({ icon, title, content }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 rounded-xl bg-white/5 border border-white/10">{icon}</div>
      <h2 className="text-2xl font-bold text-white pt-2">{title}</h2>
    </div>
    {content}
  </div>
);

export default Privacy;
