"use client";
import Image from "next/image";
import style from "./KPABreadcrumbs.module.scss";
import { Breadcrumb, Container } from "react-bootstrap";

const KPABreadcrumbs = ({ navigation }) => {
  return (
    <div className={style.kpa_breadcrumbs__wrap}>
      <Container>
        <Breadcrumb className={style.kpa_breadcrumbs}>
          {navigation?.map((nav, i) => {
            return (
              <Breadcrumb.Item
                href={nav?.url}
                active={i === navigation?.length - 1}
              >
                {nav?.page}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default KPABreadcrumbs;
