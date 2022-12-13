# Accommodate!

For this task I added cards for each accommodation object in the data and selected which information to display.

I allowed the user to view rooms if any were available by pressing a button. This gives the user information about each room that the accomodation offers and gives the availability of these rooms, informing the user if there are no rooms left. The 'book now!' buttons are just placeholders.

I added some utility functions to run checks on the data since it was cumbersome to do this in my components.

## If I had more time...

- 🎨 Styling:
  - Make the information more readable and laid out in a better way.
  - Add a grid layout which is responsive to screen size.
  - It would be nice if the room view was in a better place and the screen was reorganised to accomodate this.
  - More reaction to users such as shadows, highlights and click responses.
  - Show only a limited amount of cards and allow the user to expand this either through pressing a button or scrolling.
  - Show the star rating actually as stars ⭐️
- 🔀 Routing:
  - I had initially planned for each accommodation card to be smaller and clickable which would route to a page dedicated to that accommodation. This would solve some of the styling issues and make the page look neater with less cluttering information. However, given my limited time I decided to do this task on a single route.
- ⏳ Filtering:
  - It is not very user friendly that the accommodation appears in no particular order.
  - I considered making accommodation that was completely sold out not appear for the user, but this could be better integrated in a filtering system.
  - It would be useful if you could filter by availabilty, location, room type, accommodation type, price etc...
  - More complex filtering could be added like using sliders for price or distance from the event.
- 🔒 Security:
  - I used dangerouslySetInnerHTML to parse the accommodation descriptions into HTML. This is fine for the current data, but this would need to be sanitised if this data was able to be inputted by a user.
- 💭 Other ideas:
  - The data was very rich and gave lots of cool ideas of what might be possible to add.
  - Location data - could show a map of the accommodation location using a mapping API.
  - Show facilities available to each room.
  - Allow users to change the currency.
