import React, {Component} from 'react'

class Profiles extends Component {
  render() {
   return(
    <ol className='profiles'>
       {this.props.profiles.map((profile) => (
              <li key={profile.userID}>
				<p>Username: {this.props.users[profile.userID].userName} / {this.props.users[profile.userID].name}</p>
				<p>Favorite Movie: {this.props.movies[profile.favoriteMovieID].name}</p>
			  </li>
       ))}
	</ol>
    
   )
  }
}

export default Profiles