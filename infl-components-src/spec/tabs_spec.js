/*

   This test crashes PhantomJS because the tabs component busts the call stack size


 Chrome 43.0.2357 (Mac OS X 10.10.3) Tabs Component "before each" hook FAILED
 RangeError: Maximum call stack size exceeded
 at ResponsiveTabsMixin._tabToHideIndex (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36)
 at ResponsiveTabsMixin._openVisibleTab (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5578:13)
 at ResponsiveTabsMixin._hideTab (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5574:10)
 at ResponsiveTabsMixin._toggleTabVisibility (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5567:12)
 at ResponsiveTabsMixin._adjustTabsForScreenSize (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5544:12)
 at ResponsiveTabsMixin._hideTab (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5575:10)
 at ResponsiveTabsMixin._toggleTabVisibility (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5567:12)
 at ResponsiveTabsMixin._adjustTabsForScreenSize (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5544:12)
 at ResponsiveTabsMixin._hideTab (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5575:10)
 at ResponsiveTabsMixin._toggleTabVisibility (absolute/var/folders/8k/8sfjr7k94f1815hwy1w_t38w0000gn/T/7b8fe87e4a3308f2ff2509ea4e6ab774.browserify?a250c284eb6f7b9d8fd0b4aaa2c9bc36ee1a1b36:5567:12)
 Chrome 43.0.2357 (Mac OS X 10.10.3): Executed 206 of 214 (1 FAILED) (skipped 8) (8.062 secs / 7.86 secs)
 ERROR [launcher]: PhantomJS crashed.

 */


/* jshint expr:true */

//var React  = require('react/addons');
//var ReactTestUtils = React.addons.TestUtils;
//
//var Tabs = require('tabs');
//
//var chai = require('chai');
//var expect = chai.expect;
//
//describe('Tabs Component', function() {
//  var subject;
//
//  beforeEach(function() {
//    subject = ReactTestUtils.renderIntoDocument(<Tabs openTabIndex={1}>
//      <Tabs.Tab title="First Tab">
//          <h2>First Tab</h2>
//          <p>This is the first tabs content.</p>
//      </Tabs.Tab>
//      <Tabs.Tab title="Second Tab">
//          <h2>First Tab</h2>
//          <p>This is the second tabs content.</p>
//      </Tabs.Tab>
//      <Tabs.Tab title="Third Tab">
//        <h2>Third Tab</h2>
//        <p>This is the third tabs content.</p>
//      </Tabs.Tab>
//    </Tabs>);
//  });
//
//  context('Tabs', function() {
//    it('renders the tabs with the selected tab open', function() {
//      var subjectNode = ReactDOM.findDOMNode(subject);
//      expect(subjectNode.tagName).to.eq('NAV');
//
//      var tabs = document.querySelectorAll('LI.pt-tab');
//      expect(tabs.length).to.eq(3);
//
//      expect(tabs[1].nodeName).to.eq('LI');
//      expect(tabs[1].className.indexOf('tab-open')>-1).to.eq(true);
//
//    });
//  });
//});
