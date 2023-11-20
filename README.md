## RANDOM NEWS

## MVP:

    [X] API
    [X] APP / MAIN / HOMEPAGE
    [X] READ: HOMEPAGE (Render the different categories pages)
    [X] CREATE: ADD POST (Inputs in the form: title, date, location, description, category, image, url) --> Zohra
    [X] DELETE: REMOVE AN EXISTING POST --> Zohra
    [X] UPDATE: EDIT EXISTING POST --> Zohra

## CSS

    [ ] General style
    [ ] Give style to components

## IMPROVEMENTS:

    [ ] Search bars to look for posts (ie. by title or loation)
    [ ] Order posts by date.
    [ ] Loader / Skeleton.
    [ ] Responsive.
    [ ] Delete the posts automatically after x days.
    [X] Show the 6 first posts and then 'show more' button.
    [ ] When click on button delete: add an cverlay with message 'Are you sure you want to remove this post?' Yes, remove it. / Cancel.
    [X] Add prettier config.
    [ ] Check the scroll down of the page works properly.
    [ ] Likes and dislikes for he posts.
    [ ] Comments.

## CATEGORIES (Pages with each category, )

    - All.
    - Weather updates.
    - Selling.
    - Entertainment.
    - Events.
    - Traffic.
    - Social.
    - Job offers.
    - Education.
    - Other.

HOMEPAGE will have: --> Zohra [X]

- Component: Navbar. --> Cris [X]
- Component: AddPost.jsx --> Zohra [X]

NAVBAR will have: --> Cris (work from here) [X]

- Home [X]
- Dropdown menu with the posts' categories pages [X]
- About us [X]
- Style [X]

ALL POSTS will have: --> Cris. [X]

- All posts (without filter). Each post will show:
  -- Image. [X]
  -- Title. [X]
  -- Location. [X]
  -- Date. [X]
  -- Category. [X]
  -- Button: edit. [ ] --> Zohra
  -- Button: delete. [ ] --> Zohra
- Style [/]
- Show more button [X]

POST DETAILS will have: --> Cris [X]

- Just one post with all the properties except the id (image, title, description, location, date, image, url and category).
- Button: edit.
- Button: delete.

EACH CATEGORY: --> Zohra.

- GET request post with the category of the page.

\*\* EACH PAGE SHOULD HAVE ON TOP SOME SEARCH BARS TO FILTER BY TITLE OR LOCATION (So that the user can type what he/she is looking for and only the posts with those letter will be displayed)
