import { FiCamera, FiInstagram, FiMail, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";

export function ProfessionalOneFooterSection() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="font-headline text-3xl font-bold tracking-tighter text-stone-900">
              The Editorial Union
            </div>
            <p className="max-w-sm font-body leading-relaxed text-stone-600">
              Menciptakan kenangan digital yang elegan untuk momen paling berharga dalam hidup Anda.
              Dirancang dengan cinta dan presisi.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-label text-xs font-bold tracking-widest text-primary uppercase">
              Editorial Studio
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="group flex items-center gap-3 text-stone-600 transition-colors hover:text-primary"
                  href="https://instagram.com/editorialstudio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiCamera className="text-xl" />
                  <span className="font-headline text-lg italic">@editorialstudio</span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-3 text-stone-600 transition-colors hover:text-primary"
                  href="https://tiktok.com/@editorialstudio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok className="text-xl" />
                  <span className="font-headline text-lg italic">@editorialstudio</span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-3 text-stone-600 transition-colors hover:text-primary"
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMessageCircle className="text-xl" />
                  <span className="font-headline text-lg italic">+62 812 3456 7890</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-label text-xs font-bold tracking-widest text-primary uppercase">
              Developer
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="group flex items-center gap-3 text-stone-600 transition-colors hover:text-primary"
                  href="https://instagram.com/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiInstagram className="text-xl" />
                  <span className="font-headline text-lg italic">@developer</span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-3 text-stone-600 transition-colors hover:text-primary"
                  href="mailto:developer@email.com"
                >
                  <FiMail className="text-xl" />
                  <span className="font-headline text-lg italic">developer@email.com</span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-3 text-stone-600 transition-colors hover:text-primary"
                  href="https://wa.me/6281298765432"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiPhoneCall className="text-xl" />
                  <span className="font-headline text-lg italic">+62 812 9876 5432</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200 bg-stone-100 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 md:flex-row">
          <div className="font-body text-[10px] font-medium tracking-[0.2em] text-stone-500 uppercase">
            &copy; 2024 The Editorial Union. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
