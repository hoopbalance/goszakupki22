import { useState } from 'react'
import {
  Box, Button, Card, CardContent, Grid, Snackbar, TextField, Typography, Alert,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { usePageContext } from 'vike-react/usePageContext'
import { sendCallback } from '../lib/api.js'

// Форма «Закажите обратный звонок». Отправляет заявку в API-заглушку /api/callback.
export default function CallbackForm({ withEmail = false }) {
  const pageContext = usePageContext()
  const [form, setForm] = useState({ name: '', phone: '', message: '', email: '' })
  const [status, setStatus] = useState({ loading: false, sent: false, error: null })

  const onChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, sent: false, error: null })
    try {
      await sendCallback(pageContext.apiBase, { ...form, source: pageContext.urlPathname })
      setStatus({ loading: false, sent: true, error: null })
      setForm({ name: '', phone: '', message: '', email: '' })
    } catch (err) {
      setStatus({ loading: false, sent: false, error: 'Не удалось отправить заявку. Попробуйте позже.' })
    }
  }

  return (
    <Card sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Закажите обратный звонок
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Если вы не можете дозвониться или у вас нет времени, укажите имя, номер телефона
          и тематику разговора — мы сами вам позвоним.
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={withEmail ? 4 : 6}>
              <TextField required fullWidth label="Имя" value={form.name} onChange={onChange('name')} />
            </Grid>
            <Grid item xs={12} sm={withEmail ? 4 : 6}>
              <TextField
                required fullWidth label="Номер телефона" type="tel"
                value={form.phone} onChange={onChange('phone')}
              />
            </Grid>
            {withEmail && (
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Email" type="email" value={form.email} onChange={onChange('email')} />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                required fullWidth multiline minRows={3} label="Сообщение"
                value={form.message} onChange={onChange('message')}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit" variant="contained" size="large"
                endIcon={<SendIcon />} disabled={status.loading}
              >
                {status.loading ? 'Отправка…' : 'Отправить'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Snackbar open={status.sent} autoHideDuration={5000} onClose={() => setStatus({ ...status, sent: false })}>
        <Alert severity="success" variant="filled">
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </Alert>
      </Snackbar>
      <Snackbar open={!!status.error} autoHideDuration={5000} onClose={() => setStatus({ ...status, error: null })}>
        <Alert severity="error" variant="filled">{status.error}</Alert>
      </Snackbar>
    </Card>
  )
}
