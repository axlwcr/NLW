const LinksSocialMedia = {
  github: 'axlwcr',
  youtube: 'https://www.youtube.com/channel/UCLHcdvrEqvrw-qGtmOgc2Zg',
  facebook:
    'https://pt-br.facebook.com/people/Axl-Willyan-Cavalheiro/100004474056720/?comment_id=Y29tbWVudDozMjMyNjU5OTkyOTU1ODNfMzIzMzAyOTc1OTU4NTUy',
  instagram: 'axlwcr',
  twitter: 'axlwcr'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data =>{
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
