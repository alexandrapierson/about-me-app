import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function homePage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("main-page");
}

export function aboutPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("about-page");
}

export function skillsPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("skills-page");
}

export function contactPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("contact-page");
}

export function back(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack(); 
}

export function next(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("contact-page");
}

