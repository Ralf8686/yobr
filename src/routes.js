import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router'

import { NotFoundPage } from 'components/Page'
import { PostPage, PostListPage } from 'components/Post'
// import PostFormPage from 'components/PostFormPage'

export default (
  <Switch>
    <Route exact path="/"><Redirect to="/all"/></Route>
    <Route exact path="/all" component={PostListPage} />
    <Route exact path="/:filterType(flow|hub)/:filteredId" component={PostListPage} />
    <Route exact path="/post/:id(\d+)" component={PostPage} />
    <Route component={NotFoundPage}/>
  </Switch>
  //
  // <Route path="/" component={App}>
  //   <Route component={App}>
  //     <IndexRoute component={PostTeaserList} />
  //     <Route path="flows" component={PostTeaserList}>
  //       <Route path=":selectedFlow" />
  //     </Route>
  //     <Redirect from="post" to="/404/" />
  //     <Route path="post">
  //       <Route path="add" component={PostForm} title="Новая публикация" />
  //       <Route path=":postId" component={Post}>
  //         <Route path="edit" component={PostForm} title="Редактирование публикации" />
  //       </Route>
  //     </Route>
  //     <Route path="feedback" component={Feedback} />
  //   </Route>
  //   <Route path="*" component={NotFound} />
  // </Route>
  //
)
