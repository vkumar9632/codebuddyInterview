// level {2}
function getUsers() {
    // let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    // let user = doc[0];
    // let Profile = doc[1];
    // let p = doc[2];
  
    // const userProfile = {
    //   user: user,
    //   profile: Profile,
    //   posts: p
    // };
  
    // return userProfile;

    let obj = {}
    Promise.all(getUser(), getProfile(), getPosts()).then((value)=>{
        value.map((data,index)=>{
          if(index == 0){
            obj["user"] = data;
        }else if(index == 1){
            obj['profile'] = data;
        }
        else if(index == 2){
            obj['posts'] = data;
        }  
        })
    })
    return obj;
  }
