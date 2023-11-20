"use client";
import useSWR from "swr";
import styles from "./stories.module.css";
import classNames from "classnames/bind";
import axios from "axios";
import Table from "@/types/app.table";
const cx = classNames.bind(styles);
const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function Stories() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <main className={cx("wrapper")}>
      <Table posts={data} />
    </main>
  );
}
