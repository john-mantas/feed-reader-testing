# Feed Reader Testing
Given an RSS Feed webpage we implement test suites to ensure that everything
works correctly, using the behavior driven development testing framework "Jasmine".

This is a project made for the Udacity Front End developer Nanodegree program.

## Installing
To run the tests you can clone this repo on your local machine and
open the _index.html_ file.

## Included Test Suites
### "RSS Feeds"
With this suite we test if the _allFeeds_ variable has been defined and that
it is not empty and if each feed has a valid URL and name.

### "The Menu"
With this suite we ensure that the menu is hidden by default and that changes
visibility when the menu icon is clicked.

### "Initial Entries"
With this suite we ensure that when the _loadFeed_ function is called and
completes its work, there is at least a single _.entry_ element within the
_.feed_ container.

### "New Feed Selection"
With this suite we ensure that when a new feed is loaded by the _loadFeed_
function the content actually changes.

## Built with
* HTML
* CSS
* JavaScript
* jQuery 2.1.1
* HandlebarsJS 2.0.0
* Jasmine 2.1.2

## Authors
**Udacity team** - *Starter Code*

**John Mantas** - *Completed project*

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.