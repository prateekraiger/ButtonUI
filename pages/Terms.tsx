import React from "react";
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-6">
            <FileText className="w-3 h-3" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-zinc-400 text-lg">
            Last updated: December 6, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <p className="text-zinc-300 leading-relaxed">
            Welcome to ButtonUI. These Terms of Service ("Terms") govern your use
            of our website and services. By accessing or using ButtonUI, you agree
            to be bound by these Terms. If you disagree with any part of the
            terms, you may not access the service.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <Section
            icon={<CheckCircle className="w-5 h-5 text-emerald-400" />}
            title="License to Use"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  ButtonUI grants you a non-exclusive, non-transferable, revocable
                  license to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>Access and use the ButtonUI website and components</li>
                  <li>Download and use the button components in your projects</li>
                  <li>Modify the components to suit your needs</li>
                  <li>Use the components in both personal and commercial projects</li>
                </ul>
                <p className="text-zinc-300 leading-relaxed mt-4">
                  This license is granted under the MIT License, which permits
                  unrestricted use, modification, and distribution, subject to the
                  inclusion of the original copyright notice.
                </p>
              </div>
            }
          />

          <Section
            icon={<XCircle className="w-5 h-5 text-rose-400" />}
            title="Restrictions"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>
                    Claim ownership of the ButtonUI components or rebrand them as
                    your own product
                  </li>
                  <li>
                    Sell or redistribute the components as-is without substantial
                    modification
                  </li>
                  <li>
                    Use the service in any way that violates any applicable laws or
                    regulations
                  </li>
                  <li>
                    Attempt to reverse engineer or decompile any software contained
                    on ButtonUI's website
                  </li>
                  <li>
                    Use the service to transmit any malicious code, viruses, or
                    harmful content
                  </li>
                  <li>
                    Interfere with or disrupt the service or servers or networks
                    connected to the service
                  </li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Scale className="w-5 h-5 text-purple-400" />}
            title="Intellectual Property"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  The Service and its original content (excluding user-contributed
                  content), features, and functionality are and will remain the
                  exclusive property of ButtonUI and its licensors. The Service is
                  protected by copyright, trademark, and other laws.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Our trademarks and trade dress may not be used in connection with
                  any product or service without our prior written consent.
                </p>
              </div>
            }
          />

          <Section
            icon={<AlertTriangle className="w-5 h-5 text-yellow-400" />}
            title="Disclaimer of Warranties"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE
                  FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>Warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties that the service will be uninterrupted or error-free</li>
                  <li>Warranties regarding the accuracy or reliability of any content</li>
                  <li>Warranties that any defects will be corrected</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Info className="w-5 h-5 text-cyan-400" />}
            title="Limitation of Liability"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  IN NO EVENT SHALL BUTTONUI, ITS DIRECTORS, EMPLOYEES, PARTNERS,
                  AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                  WITHOUT LIMITATION:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                  <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>Damages resulting from your use or inability to use the service</li>
                  <li>
                    Unauthorized access to or alteration of your transmissions or data
                  </li>
                  <li>Any other matter relating to the service</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<FileText className="w-5 h-5 text-indigo-400" />}
            title="Changes to Terms"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time
                  at our sole discretion. If a revision is material, we will try to
                  provide at least 30 days' notice prior to any new terms taking
                  effect.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  What constitutes a material change will be determined at our sole
                  discretion. By continuing to access or use our Service after those
                  revisions become effective, you agree to be bound by the revised
                  terms.
                </p>
              </div>
            }
          />

          <Section
            icon={<Scale className="w-5 h-5 text-orange-400" />}
            title="Governing Law"
            content={
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the
                  laws applicable in your jurisdiction, without regard to its
                  conflict of law provisions.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Our failure to enforce any right or provision of these Terms will
                  not be considered a waiver of those rights. If any provision of
                  these Terms is held to be invalid or unenforceable by a court, the
                  remaining provisions will remain in effect.
                </p>
              </div>
            }
          />
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact
            us at:
          </p>
          <a
            href="mailto:legal@buttonui.com"
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            legal@buttonui.com
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

export default Terms;
