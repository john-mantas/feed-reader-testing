/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This suite is all about the RSS feeds definitions,
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* Test to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not
         * empty.
         */
        it('loops throught each feed and checks URL', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull;
                expect(feed.url).not.toBe('');
            }
        });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is
         * not empty.
         */
        it('loops throught each feed and checks name', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBenull;
                expect(feed.name).not.toBe('');
            }
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {
        /* Test that ensures the menu element is hidden by
         * default. 
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        /* Test that ensures the menu changes visibility when the menu
          * icon is clicked. This test should have two expectations:
          * does the menu display when clicked and does it hide when
          * clicked again.
          */
        it('changes visibility on clicks', function() {
            //Open the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            //Hide the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have at least a single .entry element', function() {
            expect($('.feed').find('.entry').length).not.toBe(0);
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var valStart, 
            valEnd;
        
        /* Test that ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
        beforeEach(function(done) {  
            loadFeed(0, function() {
                valStart = $('.feed')[0].children[1].href;
                loadFeed(1, function() {
                    valEnd = $('.feed')[0].children[1].href;
                    done();
                });
            });
        });
        
        afterEach(function(done) {
            loadFeed(0, done);
        });
        
        it('changes content for each new feed', function() {
            expect(valStart).not.toBe(valEnd);
        });
    });
    
}());
