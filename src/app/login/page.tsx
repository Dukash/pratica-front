'use client'

import styles from "./login.module.css";
import { Card, Form, Input, Button } from "antd";

export default function LoginPage() {
    return (
        <main>
            <Card title="Sejam bem vindos a Prática" className={styles.cardLogin}>
                <Form layout="vertical">
                    <Form.Item label="Email" name="email">
                        <Input type="text" placeholder="usuário@email.com"/>
                    </Form.Item>
                    <Form.Item label="Senha" name="password">
                    <Input type="password" placeholder="Sua senha"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Entrar</Button>
                    </Form.Item>
                </Form>
            </Card>
        </main>
    );
}