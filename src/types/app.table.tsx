"use client";
import useSWR from "swr";
import classNames from "classnames/bind";
import axios from "axios";
interface IProps {
  posts: IPost[];
}
export default function Table(props: IProps) {
  return (
    <main>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {props.posts?.map((item: IPost, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
    </main>
  );
}
