import WidgetCollapse from './WidgetCollapse';
import WidgetChat from './WidgetChat';
import WidgetLiker from './WidgetLiker';

const root = document.querySelector('.root');

const collapse = new WidgetCollapse(root);
collapse.init();

const chat = new WidgetChat(root);
chat.init();

const liker = new WidgetLiker(root);
liker.init();
